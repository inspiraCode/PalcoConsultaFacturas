﻿using Reusable;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessSpecificLogic.EF
{
    public partial class cat_ProductLine : BaseEntity
    {
        public override int id
        {
            get
            {
                return ProductLineKey;
            }
        }
    }
}
