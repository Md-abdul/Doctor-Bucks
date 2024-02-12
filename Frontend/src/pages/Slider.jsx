import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {Center} from "@chakra-ui/react"
const images = [
    { url: "https://img.freepik.com/free-photo/medical-workers-healthcare-covid-vaccination-concept-attractive-cheerful-female-nurse-doctor_1258-92289.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" },
    { url: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66963.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=sph" },
    { url: "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=sph" },
    { url: "https://img.freepik.com/free-photo/portrait-confident-young-woman-doctor-medical-worker-coat-pointing-fingers-up-smiling-show_1258-122576.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" },
    { url: "https://img.freepik.com/premium-psd/healthcare-medical-social-media-web-banner-facebook-cover-photo-design-template_220443-350.jpg?w=1380" },
    { url: "https://img.freepik.com/free-vector/realistic-medical-facebook-cover_23-2149110108.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" },
  ];

export const Slider = () => {
  return (
    <Center mt={10} >
        <SimpleImageSlider
        width="90%"
        height={404}
        images={images}
        showBullets={true}
        showNavs={true}
        bgColor='red'
      />
    </Center>
  )
}
