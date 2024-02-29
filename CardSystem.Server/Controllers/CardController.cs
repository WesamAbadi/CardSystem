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
    public class CardsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CardsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetCards")]
        public async Task<IEnumerable<Card>> Get()
        {
            return await _context.Cards.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetCardById")]
        public async Task<ActionResult<Card>> GetById(int id)
        {
            var card = await _context.Cards.FindAsync(id);
            if (card == null)
            {
                return NotFound();
            }
            return card;
        }

        [HttpPost(Name = "CreateCard")]
        public async Task<ActionResult<Card>> Create([FromBody] Card card)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Cards.Add(card);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = card.Id }, card);
        }

        [HttpPut("{id}", Name = "UpdateCard")]
        public async Task<IActionResult> Update(int id, [FromBody] Card card)
        {
            if (id != card.Id)
            {
                return BadRequest();
            }

            _context.Entry(card).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}", Name = "DeleteCard")]
        public async Task<IActionResult> Delete(int id)
        {
            var card = await _context.Cards.FindAsync(id);
            if (card == null)
            {
                return NotFound();
            }

            _context.Cards.Remove(card);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardExists(int id)
        {
            return _context.Cards.Any(e => e.Id == id);
        }
    }
}
