using BusinessSpecificLogic.EF;
using ReusableWebAPI.Controllers;
using System.Web.Http;
using BusinessSpecificLogic.Logic;

namespace CQA.Controllers
{
    [RoutePrefix("api/Customer")]
    public class CustomerController : BaseController<cat_Customer>
    {
        public CustomerController(ICatCustomerLogic logic) : base(logic) { }
    }
}