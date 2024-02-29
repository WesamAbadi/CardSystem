using Microsoft.AspNetCore.Identity;

namespace CardSystem.Server.Models
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string PasswordHash { get; set; }
        public DateTime LastLoginTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastPasswordChangeDate { get; set; }

        public ICollection<Account>? Accounts { get; set; }

    }
}