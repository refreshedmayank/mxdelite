function Problems(){
  return (
    <div className="grid-container grid grid-cols-2 gap-10 p-10 border ">
      <div className="Left-side-column border p-10">
        <span>01 — The Problem</span>
        <h2 className="flex  gap-2 items-center p-10 md:flex-col">
          <span>Your product is good.</span>
          <span>Your brand is why</span>
          <span>people aren't</span>
          <span>buying.</span>
          </h2>


        <p>Most businesses lose customers before they even get a chance to sell.
        The product is not the problem. The first impression is. We fix that.</p>
      </div>
      <div className="Righ-column-divs flex  gap-6  md:flex-col">
        <div className="Startup border p-10">
          <span>Startup</span>
          <h3>
            Have the idea. Don't have the presentation. That's the gap we fill.
          </h3>
        </div>
        <div className="Ecommerce border p-10">
          <span>Ecommerce</span>
          <h3>
            Spending on ads but losing sales at first impression. Branding is
            the fix they are not pulling
          </h3>
        </div>
        <div className="Business border p-10 ">
          <span>Business</span>
          <h3>
            Your online presence is your first impression. We make sure it is
            the right one
          </h3>
        </div>
      </div>
    </div>
  );
}
export default  Problems;