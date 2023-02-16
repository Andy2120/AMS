using System.ComponentModel.DataAnnotations.Schema;

namespace Ratings.Models
{
    public class Total
    {
        public Guid Id { get; set; }

        public string CCId { get; set; }
        //[ForeignKey("Id")]
        //public CheckoutCounter CC { get; set; }

        public string MCRId { get; set; }
        //[ForeignKey("Id")]
        //public ManningCustomerRelation MCR { get; set; }

        public string MRId { get; set; }
        //[ForeignKey("Id")]
        //public MerchandiseReadiness MR { get; set; }
        public string SCId { get; set; }
        //[ForeignKey("Id")]
        //public StoreCleanliness SC { get; set; }


        public int TotalRating { get; set; }

    }
}
