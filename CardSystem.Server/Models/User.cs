using Microsoft.AspNetCore.Identity;

namespace CardSystem.Server.Models
{
    public class User : IdentityUser
    {
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public DateTime LastLoginTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastPasswordChangeDate { get; set; }
        public ICollection<Account>? Accounts { get; set; }

    }
}