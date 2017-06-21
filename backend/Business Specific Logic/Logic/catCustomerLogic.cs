using BusinessSpecificLogic.EF;
using Reusable;
using System.Data.Entity;

namespace BusinessSpecificLogic.Logic
{
    public interface ICatCustomerLogic : IBaseLogic<cat_Customer> { }

    public class catCustomerLogic : BaseLogic<cat_Customer>, ICatCustomerLogic
    {
        public catCustomerLogic(DbContext context, IRepository<cat_Customer> repository) : base(context, repository)
        {
        }
    }

}
