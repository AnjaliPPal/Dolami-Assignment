"use client";
import React from "react";
import { notFound, useSearchParams } from "next/navigation";
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const ProductPage = () => {
  const query = useSearchParams();
  const slug = query.get("p");
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  const userReviews = [
    { id: 1, username: "Anjali Pal", rating: 4, comment: "Great product!" },
    { id: 2, username: "Sushil Pal", rating: 4, comment: "Great product!" },
    { id: 3, username: "Aarav Pal", rating: 5, comment: "Great product!" },
    { id: 4, username: "Nirmal Pal", rating: 5, comment: "Great product!" },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E4E4E4] py-8 sm:py-16 px-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Product Image */}
        <div className="lg:max-w-lg">
          <div className="aspect-square rounded-lg shadow-lg bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold text-[#A6A6A6]">
              {product.category}
            </p>
            <p className="text-sm text-[#8C8C8C]">{`> ${product.subcategory}`}</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-10 sm:mt-0">
          <h1 className="text-5xl font-bold text-[#FFFFFF] mb-4">
            {product.productName}
          </h1>
          <p className="text-3xl font-semibold text-[#E4E4E4] mb-6">
            ${product.price.toFixed(2)}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={`${
                    product.rating > rating ? "text-yellow-500" : "text-[#3E3E3E]"
                  } h-6 w-6`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-[#A6A6A6]">
              {product.rating} out of 5
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#FFFFFF]">Description</h3>
            <p className="mt-2 text-[#A6A6A6] leading-relaxed">
              This is a premium-quality product designed to exceed your
              expectations.
            </p>
          </div>

          {/* Creator and Category */}
          <div className="space-y-2 mb-8">
            <p className="text-sm text-[#A6A6A6]">
              <span className="font-medium text-[#FFFFFF]">Category:</span>{" "}
              {product.category} - {product.subcategory}
            </p>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full lg:w-auto bg-gradient-to-r from-[#4A90E2] to-[#357ABD] hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-md flex items-center justify-center">
            <ShoppingCartIcon size={20} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* User Reviews */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#FFFFFF] mb-6">User Reviews</h2>
        <div className="space-y-6">
          {userReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#FFFFFF]">{review.username}</p>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`${
                        review.rating > rating
                          ? "text-yellow-500"
                          : "text-[#3E3E3E]"
                      } h-5 w-5`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-[#A6A6A6]">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
