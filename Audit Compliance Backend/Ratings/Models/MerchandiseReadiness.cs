using System;

namespace Ratings.Models
{
    public class MerchandiseReadiness
    {
        public Guid Id { get; set; }
        public int FMCG { get; set; }

        public int GMD { get; set; }

        public int DS { get; set; }

        public int PT { get; set; }

    }
}
