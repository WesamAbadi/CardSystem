namespace CardSystem.Server.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Contacts { get; set; }

        public ICollection<Transaction> Transactions { get; set; }


    }
}