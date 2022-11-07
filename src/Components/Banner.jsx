import React from "react";
import "./banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum optio dolorum dolorem debitis iusto. A explicabo dolore commodi quae, eius odit saepe impedit, repellendus harum ab iure praesentium suscipit reiciendis id soluta sit, consectetur dolor iste est qui corrupti. Officia qui atque architecto perferendis ratione aliquam molestias, ipsam dolorum perspiciatis accusantium, delectus inventore consequuntur! Amet, earum possimus ut dolorum quaerat, sapiente reprehenderit pariatur dolore sint incidunt nemo reiciendis ipsum asperiores cumque culpa odit saepe consequatur, vitae dolorem natus. Placeat laudantium quaerat ea dolor quo quis reiciendis nulla aperiam eveniet veniam quod repudiandae unde tenetur magnam, rerum dolorum esse explicabo autem nam eligendi iste neque. Voluptate repudiandae vel pariatur, voluptates, vero quam provident est assumenda quis laboriosam autem esse! Impedit vitae modi quidem. Praesentium doloremque ea nesciunt, exercitationem, eius unde quisquam ipsam maiores libero alias officia veniam nulla fuga. Impedit accusamus iure officiis totam quam vero soluta ipsam quibusdam omnis quo ab minima debitis qui accusantium laudantium voluptate quos, alias inventore nemo? Nihil, autem maxime nesciunt quibusdam sed cum doloribus placeat, nostrum at dicta perspiciatis consectetur dolore. Blanditiis explicabo, rem aperiam velit laudantium repellat fugit odio perferendis expedita delectus. Iusto ipsum animi cupiditate laborum debitis ex modi asperiores possimus quae doloribus?`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
