"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        id: "Laptop Dell Vostro 3400 i5",
        productImage: "assets/images/item-01.jpg",
        productName:
          "Laptop Dell Vostro 3400 i5 1135G7/8GB/256GB//OfficeH&S 2019/Win10 (70253900)",
        productPrice: "18890000",
        description:
          "Thiết kế tinh tế, thanh lịch Dell Vostro 3400 hoàn thiện với lớp vỏ nhựa nhám màu đen hiện đại, các chi tiết đơn giản mà tinh tế, dùng đẹp cho mọi đối tượng, ở mọi không gian. Trọng lượng máy 1.64 kg, độ dày 19.9 mm dễ dàng cất gọn trong balo, giỏ xách để mang theo sử dụng khi cần. .",
        categoryId: "2",
        slug: "Laptop+Dell+Vostro+3400+i5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Laptop Apple Macbook M1 ",
        productImage: "assets/images/item-02.jpg",
        productName: "Laptop Apple Macbook M1 8GB/512TB//2021/MacOS (829901)",
        productPrice: "44500000",
        description:
          "Thiết kế tinh tế, thanh lịch Macbook M1 hoàn thiện với lớp vỏ nhoom hiện đại,chip xử lý M1 mới nhất mang lại hiêụ năng mạnh mẽ, các chi tiết đơn giản mà tinh tế, dùng đẹp cho mọi đối tượng, ở mọi không gian. Trọng lượng máy 1.64 kg, độ dày 19.9 mm dễ dàng cất gọn trong balo, giỏ xách để mang theo sử dụng khi cần. .",
        categoryId: "2",
        slug: "Laptop+Apple+Macbook+M1 ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Laptop Asus Zenbook UX325EA i5 ",
        productImage: "assets/images/item-03.jpg",
        productName:
          "Laptop Asus Zenbook UX325EA i5 8GB/512GB/2021/Windows (821810)",
        productPrice: "24290000",
        description:
          "Thiết kế tinh tế,  các chi tiết đơn giản mà tinh tế, dùng đẹp cho mọi đối tượng, ở mọi không gian. Trọng lượng máy 1.64 kg, độ dày 19.9 mm dễ dàng cất gọn trong balo, giỏ xách để mang theo sử dụng khi cần. .",
        categoryId: "2",
        slug: "Laptop+Asus+Zenbook+UX325EA+i5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Laptop Dell Gaming G3 15 i7 2020 ",
        productImage: "assets/images/item-04.jpg",
        productName: "Laptop Dell Gaming G3 i7 8GB/512GB/2021/Windows (821810)",
        productPrice: "31990000",
        description:
          "Thiết kế thời trang, hiệu năng mạnh mẽ có thể chạy mượt mà tất cả các game trên thị trường hiện nay, màn hình 144hz mang lại trải nghiệm tuyệt vời",
        categoryId: "3",
        slug: "Laptop+Dell+Gaming+G3+15+i7++2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Laptop Apple Macbook Pro 16 M1 Max 2021 ",
        productImage: "assets/images/item-05.jpg",
        productName: "Laptop Apple Macbook M1 32GB/1TB//2021/MacOS (829901)",
        productPrice: "90500000",
        description:
          "Thiết kế tinh tế, thanh lịch Macbook M1 Max hoàn thiện với lớp vỏ nhoom hiện đại,chip xử lý M1 max mạnh nhất hiện nay, mang lại hiêụ năng cực kỳ mạnh mẽ, các chi tiết đơn giản mà tinh tế, dùng đẹp cho mọi đối tượng, ở mọi không gian. Trọng lượng máy 1.64 kg, độ dày 19.9 mm dễ dàng cất gọn trong balo, giỏ xách để mang theo sử dụng khi cần. .",
        categoryId: "4",
        slug: "Laptop+Apple+Macbook+Pro+16+M1Max+2021 ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Laptop HP Omen 15 ek0078TX i7 10750H",
        productImage: "assets/images/item-06.jpg",
        productName:
          "Laptop HP Omen 15 ek0078TX i7 10750H 16GB/1TB/2021/RTX 3060/Windows (821810)",
        productPrice: "56990000",
        description:
          "Chip xử lý i7 thế hệ mới nhất mang lại hiệu năng mạnh mẽ, GPU RTX 3060 có thể cần mọi thể loại game trên thị trường ",
        categoryId: "3",
        slug: "Laptop+HP+Omen+15+ek0078TX+i7+10750H",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Users", null, {});
  },
};
