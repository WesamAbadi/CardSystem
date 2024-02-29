using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CardSystem.Server.Data;
using CardSystem.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardSystem.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VendorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VendorsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetVendors")]
        public async Task<IEnumerable<Vendor>> Get()
        {
            return await _context.Vendors.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetVendorById")]
        public async Task<ActionResult<Vendor>> GetById(int id)
        {
            var vendor = await _context.Vendors.FindAsync(id);
            if (vendor == null)
            {
                return NotFound();
            }
            return vendor;
        }

        // Add other CRUD operations as needed...

        private bool VendorExists(int id)
        {
            return _context.Vendors.Any(e => e.Id == id);
        }
    }
}
