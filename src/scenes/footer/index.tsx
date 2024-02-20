import Text from "@/shared/Text";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-1 md:py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-8 basis-1/2 md:mt-0">
  <Text >BodyFix</Text>
  <p className="my-5">
    At BodyFix, we are dedicated to helping you achieve your fitness goals through our state-of-the-art facilities, diverse classes, and expert trainers.  
  </p>
  <p className="my-5">
     Whether you're looking to lose weight, build muscle, or improve your overall health, our team is here to support you every step of the way. 
  </p>

  <p>
  Join us today and discover the transformative power of fitness!
  </p>
  <p className="my-5">© BodyFix All Rights Reserved.</p>
</div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 cursor-pointer">bodyfix.com.ng</p>
          <p className="my-5">facebook.com/bodyfix</p>
          <p>twitter.com/bodyfix</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">For more information or to get started on your fitness journey, contact us at:</p>
<p>Phone: +234 812 689 9573</p>
<p>Email: bodyfix_info@gmail.com</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
