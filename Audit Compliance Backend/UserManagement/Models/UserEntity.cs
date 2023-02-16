namespace UserManagement.Models
{
    public class UserEntity
    {
        public int ID { get; set; }
        public string FullName { get; set; }
        public string Designation { get; set; }
        public string Password { get; set; }

    }
    public class Login
    {
        
        public string FullName { get; set; }
       
        public string Password { get; set; }

    }

}
