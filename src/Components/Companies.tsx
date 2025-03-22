const Companies = () => {
  return (
    <section className="bg-white py-10 text-center">
      <h3 className="text-gray-600 text-sm mb-6">
        Join 4,000+ companies already growing
      </h3>
      
      {/* Add inline styles for the animation */}
      <style>
        {`
          @keyframes roll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-roll {
            animation: roll 20s linear infinite;
          }
        `}
      </style>

      <div className="overflow-hidden">
        {/* Wrap the repeated images in a container to control spacing */}
        <div className="flex animate-roll space-x-6">
          {/* Duplicated companies to create a seamless repeat */}
          <img
            src="/images/companies.png"
            alt="Companies Logos"
            className="w-auto max-w-full h-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1200px] xl:max-w-[1500px]"
          />
          <img
            src="/images/companies.png"
            alt="Companies Logos"
            className="w-auto max-w-full h-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1200px] xl:max-w-[1500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
