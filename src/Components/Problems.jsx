function Problems() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5 bg-black text-xl text-center">
        <span className="">01 — The Problem</span>
        <h2>Your product is good. Your brand is why people aren't buying.</h2>
        <p>
          Most businesses lose customers before they even get a chance to sell.
          The product is not the problem. The first impression is. We fix that.
        </p>
      </div>
      <div className="flex flex-col gap-6 text-lg ">
        <div className="border border-b-white/20 p-3">
          <span>Startup</span>
          <h3>
            Have the idea. Don't have the presentation. That's the gap we fill.
          </h3>
        </div>
        <div className="border border-b-white/20 p-3">
          <span>Ecommerce</span>
          <h3>
            Spending on ads but losing sales at first impression. Branding is
            the fix they are not pulling.
          </h3>
        </div>
        <div className="border border-bwhite/20 p-3">
          <span>Business</span>
          <h3>
            Your online presence is your first impression. We make sure it is
            the right one.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Problems;
