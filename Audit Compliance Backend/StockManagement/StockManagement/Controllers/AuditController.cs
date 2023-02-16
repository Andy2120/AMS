using Microsoft.AspNetCore.Mvc;
using StockManagement.Models;
using StockManagement.Models.Dto;
using StockManagement.MyDbContext;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    {

        private readonly ApplicationDbContext _db;

        public AuditController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllQuestions()
        {
            List<AuditQuestion> questions = new();

            questions = _db.Questions.ToList();

            return Ok(questions);

        }
        
        [HttpPost]
        public async Task<IActionResult> AddQuesrion(AuditQuestionDto auditQuestionDto)
        {
            AuditQuestion question = new AuditQuestion() { 
            
                AuditProcedure = auditQuestionDto.AuditProcedure,
                Ceiteria = auditQuestionDto.Ceiteria,
                
            };

            _db.Questions.Add(question);
            await _db.SaveChangesAsync();

            return Ok();

        }

        [HttpPost("answer")]
        public async Task<IActionResult> AddAnswer(AuditAnswer auditAnswer)
        {
            AuditAnswer answer = new AuditAnswer()
            {



                QuestionId = auditAnswer.QuestionId,
                Comply = auditAnswer.Comply,
                Observarion = auditAnswer.Observarion,



            };



            _db.Answers.Add(answer);
            await _db.SaveChangesAsync();



            return Ok();



        }



        [HttpGet("answer")]
        public async Task<IActionResult> GetAllAnswers()
        {
            List<AuditAnswer> answers = new();
            answers = _db.Answers.ToList();
            return Ok(answers);
        }

    }
}