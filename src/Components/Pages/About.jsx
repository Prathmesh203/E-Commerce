import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, officiis dicta reiciendis doloribus nemo recusandae nesciunt inventore cupiditate velit mollitia obcaecati veritatis labore eveniet quas excepturi, dolorem voluptate explicabo ipsa, distinctio consequatur sapiente totam delectus fugiat quia. Velit sequi harum aliquam voluptatibus. Soluta ab quis maiores neque necessitatibus, voluptatem nulla tempore similique velit, odit laudantium earum a distinctio iure tempora optio assumenda ipsa voluptates ducimus fuga totam sint error. Ut, ex quisquam fugit labore ratione blanditiis deleniti quaerat dolore molestias itaque voluptatum. Vero tempora ex voluptates dignissimos dolore illum repellendus autem, dicta nam sequi saepe sunt facilis est itaque voluptas. Harum sint commodi numquam ea magni rem iusto consequatur. Officia excepturi velit repudiandae culpa sit voluptatum. Dolor ipsa explicabo aperiam?
            <br /><br />
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic recusandae perspiciatis in culpa nulla explicabo esse quisquam praesentium! Aspernatur, incidunt.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/SideImage.png"
            alt="Our Story"
            className="w-full rounded-lg"
          />
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 border rounded-lg text-center hover:bg-[#db4444] hover:text-white">
          <p className="text-2xl font-bold">10.5k</p>
          <p >Sellers active on our site</p>
        </div>
        <div className="p-6 border rounded-lg text-center hover:bg-[#db4444] hover:text-white">
          <p className="text-2xl font-bold">33k</p>
          <p >Monthly Product Sale</p>
        </div>
        <div className="p-6 border rounded-lg text-center  hover:bg-[#db4444] hover:text-whit">
          <p className="text-2xl font-bold">45.5k</p>
          <p>Customers active on our site</p>
        </div>
        <div className="p-6 border rounded-lg text-center  hover:bg-[#db4444] hover:text-whit">
          <p className="text-2xl font-bold">25k</p>
          <p >Annual gross sale in our site</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center">
          <img
            src="/girlImage.png"
            alt="Tom Cruise"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">alexa grambel</h3>
          <p className="text-gray-600">Founder & Chairman</p>
          <div className="flex justify-center space-x-4 mt-2">
           
          </div>
        </div>
        <div className="text-center">
          <img
            src="/image.png"
            alt="Emma Watson"
            className="w-[50%] rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">froza horizon</h3>
          <p className="text-gray-600">Managing Director</p>
          <div className="flex justify-center space-x-4 mt-2">
           
          </div>
        </div>
        <div className="text-center">
          <img
            src="/boyImage.png"
            alt="Will Smith"
            className="w-[80%] rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">bill gates</h3>
          <p className="text-gray-600">Product Designer</p>
          <div className="flex justify-center space-x-4 mt-2">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
 