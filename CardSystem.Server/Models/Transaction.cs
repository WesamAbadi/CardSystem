namespace CardSystem.Server.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }
        public int CardId { get; set; }
        public int VendorId { get; set; }

        public Card Card { get; set; }
        public Vendor Vendor { get; set; }
    }
}