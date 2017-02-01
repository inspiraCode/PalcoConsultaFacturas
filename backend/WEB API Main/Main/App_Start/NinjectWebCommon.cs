[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReusableWebAPI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(ReusableWebAPI.App_Start.NinjectWebCommon), "Stop")]

namespace ReusableWebAPI.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using System.Data.Entity;
    using BusinessSpecificLogic;
    using ReusableWebAPI.Controllers;
    using Reusable;
    using BusinessSpecificLogic.Logic;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        public static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind(typeof(DbContext)).To(typeof(MainContext)).InRequestScope();
            kernel.Bind(typeof(IRepository<>)).To(typeof(Repository<>)).InRequestScope();
            kernel.Bind(typeof(BaseLogic<>)).ToSelf().InRequestScope();

            //START SPECIFIC APP BINDINGS:
            kernel.Bind<ICQAHeaderLogic>().To<CQAHeaderLogic>();
            kernel.Bind<ICQALineLogic>().To<CQALineLogic>();
            kernel.Bind<ICustomerLogic>().To<CustomerLogic>();
            kernel.Bind<ICatStatusLogic>().To<catStatusLogic>();
            kernel.Bind<ICatResultLogic>().To<catResultLogic>();
            kernel.Bind<ICatConcernTypeLogic>().To<catConcernTypeLogic>();

            //END SPECIFIC APP BINDINGS

            kernel.Bind<IUserLogic>().To<UserLogic>();
            kernel.Bind(typeof(BaseController<>)).ToSelf().InRequestScope();
        }        
    }
}
