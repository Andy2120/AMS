namespace UserManagement.Models
{
    public class AdminEntity
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
    }
    public class AdminLogin
    {

        public string FullName { get; set; }

        public string Password { get; set; }

    }
}
