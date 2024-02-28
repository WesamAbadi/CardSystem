namespace CardSystem.Server.Models
{
    public class Account
    {
        public int Id { get; set; }
        public decimal Balance { get; set; }
        public string Type { get; set; } // Enum might be better

        // Foreign key
        public int UserId { get; set; }
    }
}