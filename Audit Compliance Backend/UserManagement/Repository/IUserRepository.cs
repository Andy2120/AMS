using UserManagement.Models;

namespace UserManagement.Repository
{
    public interface IUserRepository
    {
        IEnumerable<UserEntity> GetUsers();

        UserEntity GetUserById(int id);

        void DeleteUser(int id);


        UserEntity UpdateUser(UserEntity user);


        void CreateUser(UserEntity user);

        UserEntity UserLogin(Login user);
        AdminEntity AdminLogin(AdminLogin admin);
        void Save();
    }
}
