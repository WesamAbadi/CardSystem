namespace CardSystem.Server.Models
{
    public class Account
    {
        public int Id { get; set; }
        public decimal Balance { get; set; }
        public string Type { get; set; }

        // Foreign key
        public int UserId { get; set; }


        // Navigation property for the User entity
        public User? User { get; set; }

        // Navigation property for the collection of cards associated with this account
        public ICollection<Card> Cards { get; set; }
    }
}