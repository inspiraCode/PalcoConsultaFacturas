using BusinessSpecificLogic.EF;
using Reusable;
using System.Data.Entity;
using System.Linq;

namespace BusinessSpecificLogic.Logic
{
    public interface ICatCustomerLogic : IBaseLogic<cat_Customer> { }

    public class catCustomerLogic : BaseLogic<cat_Customer>, ICatCustomerLogic
    {
        public catCustomerLogic(DbContext context, IRepository<cat_Customer> repository) : base(context, repository)
        {
        }

        protected override IQueryable<cat_Customer> applyOrderByWhenPaging(IQueryable<cat_Customer> recordset)
        {
            return recordset.OrderBy(e => e.Value);
        }
    }

}
