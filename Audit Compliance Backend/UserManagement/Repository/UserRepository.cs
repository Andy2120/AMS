using Microsoft.EntityFrameworkCore;
using UserManagement.DBContexts;
using UserManagement.Models;

namespace UserManagement.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _dbContext;

        public UserRepository(UserContext dbContext)
        {
            _dbContext = dbContext;
        }
      
        public void DeleteUser(int userId)
        {
            try
            {
                var user = _dbContext.Users.Find(userId);
                _dbContext.Users.Remove(user);
                Save();
            }
            catch (Exception e)
            {

            }
        }


        public UserEntity GetUserById(int userId)
        {
            return _dbContext.Users.Find(userId);
        }

        public UserEntity UserLogin(Login user)
        {
            return _dbContext.Users.FirstOrDefault(x => x.FullName == user.FullName);
        }

        public AdminEntity AdminLogin(AdminLogin admin)
        {
            return _dbContext.Admin.FirstOrDefault(x => x.FullName == admin.FullName);
        }

        public IEnumerable<UserEntity> GetUsers()
        {
            return _dbContext.Users.ToList();
        }

       

        public void CreateUser(UserEntity user)
        {
            _dbContext.Add(user);
            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

      
        public UserEntity UpdateUser(UserEntity user)
        {
            var userObj = _dbContext.Users.Find(user.ID);
            if (userObj != null)
            {
                userObj.FullName = user.FullName;
                userObj.Designation = user.Designation;
                userObj.Password = user.Password;

                _dbContext.Entry(userObj).State = EntityState.Modified;
                Save();
                return userObj;
            }
            return null;

        }
    
    }
}
