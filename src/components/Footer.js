const Footer = () => {
  return (
    <footer>
    <div class="container px-6 py-8 mx-auto border-t-4 border-primary">
        <div class="flex flex-col items-center text-center">
            <img class="w-auto h-12" src="https://d2pi0n2fm836iz.cloudfront.net/323767/02142022104531620a32cb40c23.png" alt="footer" />
        </div>

        <hr class="my-6 border-gray-200 md:my-10 " />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 ">© Copyright 2023. All Rights Reserved.</p>

            <div class="flex -mx-2">
            <img src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg" className="w-6 h-6" />
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
