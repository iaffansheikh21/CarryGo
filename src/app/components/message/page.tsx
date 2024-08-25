// import React from "react";
// import "./test.css";

// const page = () => {
//   return (
//     <>
//       <section className="content">
//         <section className="block">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-5 col-lg-5 col-xl-4">
//                 {/*============ Section Title===========================================================*/}
//                 <div className="section-title clearfix">
//                   <h3>People</h3>
//                 </div>
//                 <div id="messaging__chat-list" className="messaging__box">
//                   <div className="messaging__header">
//                     <ul className="nav nav-pills">
//                       <li className="nav-item">
//                         <a className="nav-link active" href="#">
//                           All
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="nav-link" href="#">
//                           Buyers
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="nav-link" href="#">
//                           Sellers
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="nav-link" href="#">
//                           Blocked
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="messaging__content">
//                     <ul className="messaging__persons-list">
//                       <li>
//                         <a href="#" className="messaging__person">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-01.jpg"
//                           />
//                           <figure className="content">
//                             <h5>Jane Brown</h5>
//                             <p>
//                               Lorem ipsum dolor sit amet, consectetur adipiscing
//                               elit. Ut
//                             </p>
//                             <small>24 Hour Ago</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-01.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                       <li>
//                         <a href="#" className="messaging__person active">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-03.jpg"
//                           />
//                           <figure className="content">
//                             <h5>Rosina Warner</h5>
//                             <p>
//                               Fusce consectetur nibh ac euismod vestibulum. Sed
//                               sit amet elit tellus
//                             </p>
//                             <small>48 Hour Ago</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-02.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                       <li>
//                         <a href="#" className="messaging__person">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-05.jpg"
//                           />
//                           <figure className="content">
//                             <h5>George A. Stevens</h5>
//                             <p>
//                               Nam vel egestas lacus, eget rutrum justo. Fusce
//                               eleifend, magna ac venenatis
//                             </p>
//                             <small>28.03.2017</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-03.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                       <li>
//                         <a href="#" className="messaging__person">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-06.jpg"
//                           />
//                           <figure className="content">
//                             <h5>Renee Williams</h5>
//                             <p>
//                               Donec consequat lobortis erat non tempus. Quisque
//                               id accumsan velit.
//                             </p>
//                             <small>05.03.2017</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-04.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                       <li>
//                         <a href="#" className="messaging__person">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-07.jpg"
//                           />
//                           <figure className="content">
//                             <h5>Nicola Armstrong</h5>
//                             <p>
//                               Lorem ipsum dolor sit amet, consectetur adipiscing
//                               elit. Ut
//                             </p>
//                             <small>11.01.2017</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-05.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                       <li>
//                         <a href="#" className="messaging__person">
//                           <figure
//                             className="messaging__image-item"
//                             data-background-image="assets/img/image-08.jpg"
//                           />
//                           <figure className="content">
//                             <h5>Ruby Manuel</h5>
//                             <p>
//                               Suspendisse potenti. Quisque vel ipsum in purus
//                               pretium malesuada.{" "}
//                             </p>
//                             <small>24.08.2016</small>
//                           </figure>
//                           <figure
//                             className="messaging__image-person"
//                             data-background-image="assets/img/author-06.jpg"
//                           />
//                         </a>
//                         {/*messaging__person*/}
//                       </li>
//                     </ul>
//                     {/*end messaging__persons-list*/}
//                   </div>
//                   {/*messaging__content*/}
//                 </div>
//                 {/*end section-title*/}
//               </div>
//               {/*end col-md-3*/}
//               <div className="col-md-7 col-lg-7 col-xl-8">
//                 {/*============ Section Title===========================================================*/}
//                 <div className="section-title clearfix">
//                   <h3>Message Window</h3>
//                 </div>
//                 {/*end section-title*/}
//                 <div id="messaging__chat-window" className="messaging__box">
//                   <div className="messaging__header">
//                     <div className="float-left flex-row-reverse messaging__person">
//                       <h5 className="font-weight-bold">Rosina Warner</h5>
//                       <figure
//                         className="mr-4 messaging__image-person"
//                         data-background-image="assets/img/author-02.jpg"
//                       />
//                     </div>
//                     <div className="float-right messaging__person">
//                       <h5 className="mr-4">You</h5>
//                       <figure
//                         id="messaging__user"
//                         className="messaging__image-person"
//                         data-background-image="assets/img/author-06.jpg"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     className="messaging__content"
//                     data-background-color="rgba(0,0,0,.05)"
//                   >
//                     <div className="messaging__main-chat">
//                       <div className="messaging__main-chat__bubble">
//                         <p>
//                           Curabitur vel venenatis sem. Fusce suscipit pharetra
//                           nisl, sit amet blandit sem sollicitudin ac.
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                       <div className="messaging__main-chat__bubble">
//                         <p>
//                           Vivamus laoreet nisl a odio commodo varius. Donec arcu
//                           mauris, molestie a euismod at, mattis eu arcu. Cras
//                           volutpat, velit sit amet cursus molestie, ex ipsum
//                           sagittis urna, vitae auctor augue erat eget justo. Sed
//                           dignissim lacus risus, ut blandit nunc volutpat quis.
//                           Fusce porta semper nisi, quis lobortis nulla ultricies
//                           ac.
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                       <div className="messaging__main-chat__bubble user">
//                         <p>
//                           Cras volutpat, velit sit amet cursus molestie, ex
//                           ipsum sagittis urna, vitae auctor augue erat eget
//                           justo. Sed dignissim lacus risus, ut blandit nunc
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                       <div className="messaging__main-chat__bubble user">
//                         <p>
//                           Sed dignissim lacus risus, ut blandit nunc
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                       <div className="messaging__main-chat__bubble">
//                         <p>
//                           Donec consequat lobortis erat non tempus. Quisque id
//                           accumsan velit. Nullam mollis bibendum ex. Integer
//                           egestas nisi nulla, ut tempus mi euismod in
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                       <div className="messaging__main-chat__bubble user">
//                         <p>
//                           Quisque id accumsan velit. Nullam mollis bibendum ex.
//                           Integer egestas nisi nulla, ut tempus mi euismod in
//                           <small>24 hour ago</small>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="messaging__footer">
//                     <form className="form">
//                       <div className="input-group">
//                         <input
//                           type="text"
//                           className="form-control mr-4"
//                           placeholder="Your Message"
//                         />
//                         <div className="input-group-append">
//                           <button className="btn btn-primary" type="submit">
//                             Send <i className="fa fa-send ml-3" />
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               {/*end col-md-9*/}
//             </div>
//             {/*end row*/}
//           </div>
//           {/*end container*/}
//         </section>
//         {/*end block*/}
//       </section>
//     </>
//   );
// };

// export default page;

// import React from "react";

// const Page = () => {
//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* People Section */}
//       <div className="w-full lg:w-1/3 p-4">
//         <div className="bg-white rounded shadow-md">
//           <div className="border-b p-4">
//             <h3 className="text-lg font-semibold">People</h3>
//           </div>
//           <div id="messaging__chat-list" className="overflow-y-scroll h-96">
//             <div className="p-4">
//               <ul className="flex space-x-4">
//                 <li className="nav-item">
//                   <a className="nav-link active text-blue-500" href="#">
//                     All
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link text-gray-500 hover:text-blue-500"
//                     href="#"
//                   >
//                     Buyers
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link text-gray-500 hover:text-blue-500"
//                     href="#"
//                   >
//                     Sellers
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link text-gray-500 hover:text-blue-500"
//                     href="#"
//                   >
//                     Blocked
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="p-4">
//               <ul className="space-y-4">
//                 {/* Person Items */}
//                 <li>
//                   <a href="#" className="flex items-start space-x-4">
//                     <figure
//                       className="w-12 h-12 rounded-md bg-cover bg-center shadow-md"
//                       style={{
//                         backgroundImage: `url(assets/img/image-01.jpg)`,
//                       }}
//                     />
//                     <div className="flex-grow">
//                       <h5 className="font-medium">Jane Brown</h5>
//                       <p className="text-sm text-gray-500">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       </p>
//                       <small className="text-gray-400">24 Hour Ago</small>
//                     </div>
//                     <figure
//                       className="w-10 h-10 rounded-full bg-cover bg-center shadow-md"
//                       style={{
//                         backgroundImage: `url(assets/img/author-01.jpg)`,
//                       }}
//                     />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="flex items-start space-x-4">
//                     <figure
//                       className="w-12 h-12 rounded-md bg-cover bg-center shadow-md"
//                       style={{
//                         backgroundImage: `url(assets/img/image-01.jpg)`,
//                       }}
//                     />
//                     <div className="flex-grow">
//                       <h5 className="font-medium">Jane Brown</h5>
//                       <p className="text-sm text-gray-500">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       </p>
//                       <small className="text-gray-400">24 Hour Ago</small>
//                     </div>
//                     <figure
//                       className="w-10 h-10 rounded-full bg-cover bg-center shadow-md"
//                       style={{
//                         backgroundImage: `url(assets/img/author-01.jpg)`,
//                       }}
//                     />
//                   </a>
//                 </li>
//                 {/* Repeat similar items here */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Message Window Section */}
//       <div className="w-full lg:w-2/3 p-4">
//         <div className="bg-white rounded shadow-md">
//           <div className="border-b p-4">
//             <h3 className="text-lg font-semibold">Message Window</h3>
//           </div>
//           <div
//             id="messaging__chat-window"
//             className="h-96 p-4 flex flex-col justify-between"
//           >
//             <div className="space-y-4 overflow-y-scroll">
//               {/* Chat Bubbles */}
//               <div className="flex">
//                 <div className="bg-gray-300 p-4 rounded-lg relative w-1/2">
//                   <p>
//                     Curabitur vel venenatis sem. Fusce suscipit pharetra nisl.
//                   </p>
//                   <small className="text-gray-500 mt-2 block">
//                     24 hour ago
//                   </small>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="bg-white border p-4 rounded-lg relative w-1/2">
//                   <p>Vivamus laoreet nisl a odio commodo varius.</p>
//                   <small className="text-gray-500 mt-2 block">
//                     24 hour ago
//                   </small>
//                 </div>
//               </div>
//               {/* Repeat for other chat bubbles */}
//             </div>
//             <div className="mt-4">
//               <form className="flex">
//                 <input
//                   type="text"
//                   className="flex-grow p-2 border border-gray-300 rounded-l-lg"
//                   placeholder="Your Message"
//                 />
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React from "react";
import Navbar from "../Navbar";
import MessagePage from "./MessagePage";
import Footer from "../Footer";
import BannerSectionPricing from "../pricing/BannerSectionPricing";
const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing heading="Message" />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <MessagePage />
        </div>
      </div>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <div className="ml-36 md:ml-20">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
