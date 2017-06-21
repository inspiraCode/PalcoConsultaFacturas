namespace BusinessSpecificLogic.EF
{
    using Reusable;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class cat_Customer : BaseEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public cat_Customer()
        {
            
        }

        [Key]
        public int CustomerKey { get; set; }

        public override int id
        {
            get
            {
                return CustomerKey;
            }
        }

        [Required]
        [StringLength(50)]
        public string Value { get; set; }
    }
}
