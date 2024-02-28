namespace CardSystem.Server.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public bool Valid { get; set; }
        public string State { get; set; }
        public string Type { get; set; }

        // Foreign key
        public int AccountId { get; set; }
    }
}