const Products = () => {
  return (
<section>
        <div class="container px-6 py-8 mt-8 mx-auto">
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 class="mb-6 text-3xl font-bold text-slate-900">Our products</h3>
            </div>
            <div class="lg:flex lg:-mx-2">
                <div class="mt-6 lg:mt-0 lg:px-2">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-slate-700">4 Items</p>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-16">
                        <div className="flex">
                            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1627885793933-584e53987c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="T-Shirt" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                            </div>

                        </div>

                        <div className="flex">
                            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1512206879471-b4d119aef899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="T-Shirt" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                            </div>

                        </div>

                        <div className="flex">
                            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1585049303349-6680e6179692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="T-Shirt" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                            </div>

                        </div>

                        <div className="flex">
                            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1597463012204-2acc79dd325b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="T-Shirt" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Products;
