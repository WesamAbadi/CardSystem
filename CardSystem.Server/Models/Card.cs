namespace CardSystem.Server.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public bool Valid { get; set; }
        public string State { get; set; } // Enum might be better
        public string Type { get; set; } // Enum might be better

        // Foreign key
        public int AccountId { get; set; }
    }
}