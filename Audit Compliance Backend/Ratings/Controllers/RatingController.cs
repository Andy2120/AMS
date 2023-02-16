
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Ratings.DbContexts;
using Ratings.Models;
using Ratings.Models.Dto;

namespace Ratings.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class RatingController : Controller
    {
        private readonly ApplicationDbContext _db;
        public RatingController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        [Route("AddRatings")]
        public async Task<object> AddRating(addRating addRating)
        {
            try
            {
                CheckoutCounter cc = new CheckoutCounter
                {
                    CDC = addRating.Cc.CDC,
                    QECC = addRating.Cc.QECC

                };
                _db.CheckoutCounters.Add(cc);

                ManningCustomerRelation mcr = new ManningCustomerRelation
                {
                    GG = addRating.Mcr.GG,
                    Manning = addRating.Mcr.Manning,
                    CSI = addRating.Mcr.CSI
                };
                _db.ManningCustomerRelations.Add(mcr);

                MerchandiseReadiness mr = new MerchandiseReadiness
                {
                    FMCG = addRating.Mr.FMCG,
                    GMD = addRating.Mr.GMD,
                    DS = addRating.Mr.DS,
                    PT = addRating.Mr.PT
                };
                _db.MerchandiseReadinesses.Add(mr);

                StoreCleanliness sc = new StoreCleanliness
                {
                    GPFE = addRating.Sc.GPFE,
                    SAB = addRating.Sc.SAB,
                    RS = addRating.Sc.RS,
                    BOEA = addRating.Sc.BOEA,
                    FSCR = addRating.Sc.FSCR,
                };
                _db.storeCleanlinesses.Add(sc);
                await _db.SaveChangesAsync();

                Total tt = new Total
                {
                    SCId = sc.Id.ToString(),
                    MRId = mr.Id.ToString(),
                    MCRId = mcr.Id.ToString(),
                    CCId = cc.Id.ToString(),
                    TotalRating = addRating.TotalRating,
                };
                _db.Totals.Add(tt);
                await _db.SaveChangesAsync();


                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }




        }
    }
}
