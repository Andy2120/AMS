using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using UserManagement.Models;
using UserManagement.Repository;

namespace UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public IUserRepository Object { get; }

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

     // Get All Users 
        [HttpGet]
        public ActionResult<List<UserEntity>> GetUsers()
        {
            try
            {
                var users = _userRepository.GetUsers();
                return new OkObjectResult(users);
            }
            catch (Exception e)
            {
                return Problem();
            }

        }

        // Get particular User By their ID
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<UserEntity> GetUserById(int id)
        {
            try
            {
                var user = _userRepository.GetUserById(id);
                if (user == null)
                {
                    var resp = new HttpResponseMessage(System.Net.HttpStatusCode.NotFound)
                    {
                        Content = new StringContent(string.Format("No user with ID = {0}", id)),
                        ReasonPhrase = "User Id NOT FOUND"
                    };

                    return NotFound(resp);
                }


                return new OkObjectResult(user);
            }
            catch (Exception e)
            {

                return Problem();
            }

        }


    //Create User
        [HttpPost]
        public ActionResult CreateUser([FromBody] UserEntity user)
        {
            try
            {

                using (var scope = new TransactionScope())
                {
                    _userRepository.CreateUser(user);
                    scope.Complete();

                }
                return CreatedAtAction(nameof(GetUsers), new { ID = user.ID }, user);

            }
            catch (Exception e)
            {
                return Problem();
            }

        }

        //Update User by using Id
        [HttpPut]
        public ActionResult<UserEntity> UpdateUser([FromBody] UserEntity user)
        {
            try
            {

                var updatedUser = _userRepository.UpdateUser(user);
                using (var scope = new TransactionScope())
                {
                    scope.Complete();
                    if (updatedUser == null)
                    {


                        var resp = new HttpResponseMessage(System.Net.HttpStatusCode.NotFound)
                        {
                            Content = new StringContent(string.Format("No User with ID = {0}", user.ID)),
                            ReasonPhrase = "CAN'T UPDATE"
                        };
                        return NotFound(resp);
                    }

                }

                return Ok(updatedUser);
            }
            catch (Exception e)
            {

                return Problem();
            }

        }



        //Delete user using Id
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            try
            {
                var user = _userRepository.GetUserById(id);
                if (user == null)
                {
                    var resp = new HttpResponseMessage(System.Net.HttpStatusCode.NotFound)
                    {
                        Content = new StringContent(string.Format("No User with ID = {0}", id)),
                        ReasonPhrase = "User Id NOT FOUND, Can't be DELETED"
                    };

                    return NotFound(resp);
                    //throw new HttpResponseException(resp);
                }
                else
                {
                    _userRepository.DeleteUser(id);
                    return new OkResult();
                }

            }
            catch (Exception e)
            {

                return Problem();

            }

        }

        [HttpPost("login")]
        public IActionResult UserLogin([FromBody] Login user)
        {
            try
            {
                var data = _userRepository.UserLogin(user);
                if (data != null)
                {
                    if (user.Password == data.Password)
                    {
                        return Ok(data);
                    }
                    else
                    {
                        return NotFound("Wrong password");
                    }
                }
                else
                {
                    return NotFound("Wrong Credentials");
                }
            }
            catch (Exception e)
            {
                return Problem();
            }
        }

        [HttpPost("adminLogin")]
        public IActionResult AdminLogin([FromBody] AdminLogin admin)
        {
            try
            {
                var data = _userRepository.AdminLogin(admin);
                if (data != null)
                {
                    if (admin.Password == data.Password)
                    {
                        return Ok(data);
                    }
                    else
                    {
                        return NotFound("Wrong password");
                    }
                }
                else
                {
                    return NotFound("Wrong Credentials");
                }
            }
            catch (Exception e)
            {
                return Problem();
            }
        }

    }
}

