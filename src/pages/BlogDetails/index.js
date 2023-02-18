import React from "react";

import { Img, Text, Button, ReactTable, List } from "components";
import { createColumnHelper } from "@tanstack/react-table";

const BlogDetailsPage = () => {
  const tableData = React.useRef([
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "dezakir.uix@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "dezakir.uix@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "dezakir.uix@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "dezakir.uix@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "dezakir.uix@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowfullname", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[11px] pt-[20px] text-gray_600 text-left"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-start min-w-[234px] pr-[13px] py-[13px] md:w-[100%] sm:w-[100%] w-[26%]">
          <Text
            className="flex-1 text-gray_900 text-left w-[auto]"
            variant="body7"
          >
            Full Name
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowtitle", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[8px] pt-[20px] text-gray_600 text-left"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-start min-w-[234px] pr-[13px] py-[13px] md:w-[100%] sm:w-[100%] w-[26%]">
          <Text
            className="flex-1 text-gray_900 text-left w-[auto]"
            variant="body7"
          >
            Title
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowemailaddress", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[8px] pt-[20px] text-gray_600 text-left"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-start min-w-[234px] pr-[13px] py-[13px] md:w-[100%] sm:w-[100%] w-[26%]">
          <Text
            className="flex-1 text-gray_900 text-left w-[auto]"
            variant="body7"
          >
            Email Address
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowphonenumber", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[11px] pt-[20px] text-gray_600 text-left"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-start min-w-[214px] pr-[13px] py-[13px] md:w-[100%] sm:w-[100%] w-[24%]">
          <Text
            className="flex-1 text-gray_900 text-left w-[auto]"
            variant="body7"
          >
            Phone Number
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[111px] md:gap-[40px] sm:gap-[40px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <header className="bg-white_A700 flex h-[80px] md:h-[auto] sm:h-[auto] items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[19px] w-[100%]">
          <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
            <div className="header-row my-[1px]">
              <div className="flex flex-row gap-[11px] items-center justify-start">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home"
                />
                <Text
                  className="font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex sm:flex-1 flex-row font-manrope sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list">
              <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Home
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
              </li>
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Listing
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown One"
                  />
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Agents
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown Two"
                  />
                </div>
              </li>
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                  href="#"
                >
                  Property
                </a>
              </li>
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex flex-row font-manrope gap-[40px] h-[42px] md:h-[auto] sm:h-[auto] sm:hidden items-center justify-start w-[228px]">
              <Button
                className="flex items-center justify-center text-center w-[100%]"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    className="mr-[8px] text-center"
                    alt="search"
                  />
                }
                size="sm"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                  Search
                </div>
              </Button>
              <Button
                className="cursor-pointer font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray900"
              >
                Log in
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Text>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[84px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[16px] items-end justify-between w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5618_550x996.png"
                    className="h-[550px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5618"
                  />
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    What a time we are living in! A lot of things are coming
                    back, bringing back nostalgia. Wondering why I am talking
                    about nostalgia and all? Especially when it is supposed to
                    be an article on websites! Well, because some old famous
                    website technology is coming back too. Yes, I am talking
                    about static websites.
                    <br />
                    Long ago, almost all websites were used to be static sites
                    during the early days of the internet. Then dynamic sites
                    came and blew the space. A lot of websites shifted to it.
                    Obviously dynamic sites have their advantages. But static
                    sites are making a comeback. And it’s coming stronger than
                    before. In this article, you will cover the basics of static
                    websites like what is a static website, what are the
                    advantages, and when you should use a static website. Let’s
                    kick things off.
                  </Text>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_facebook_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="facebook"
                    />
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[32px] w-[32px]"
                        alt="volume"
                      />
                      <div className="flex flex-col items-center justify-start w-[71%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[auto]"
                          style={{
                            backgroundImage:
                              "url('images/img_frame1000001658.svg')",
                          }}
                        >
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Share this
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_twitter_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="twitter"
                    />
                    <Img
                      src="images/img_reddit_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="reddit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Blockquotes
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Blockquotes can be nested. Add a &gt;&gt; in front of the
                    paragraph you want to nest.
                  </Text>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start p-[30px] sm:px-[20px] rounded-radius10 w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[936px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[936px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[51px] py-[39px] rounded-radius10 w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Dynamic site CMS like WordPress has a greater
                        dependency. They require an operating system like Linux
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Unlike dynamic websites, you don’t have to depend on
                        plugins to add functionalities to your static site.
                        Instead, you can create or include features directly
                        into files. Or, you can insert widgets using a snippet.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Images
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Being a fast loading and more secure website, you can choose
                    a static website for beginner to medium level workload.
                    Hopefully, you have got the answer to what is a static
                    website and why should you use it. Decide carefully does
                    static sites are enough for your need.
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle5619_532x996.png"
                  className="h-[532px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="Rectangle5619"
                />
              </div>
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Lists
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                      variant="body3"
                    >
                      Being a fast loading and more secure website, you can
                      choose a static website for beginner to medium level
                      workload. Hopefully, you have got the answer to what is a
                      static website and why should you use it. Decide carefully
                      does static sites are enough for your need.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Performance: Faster Loading Speed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Less Server-side Dependencies
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Flexibility: More Freedom to Develop Websites
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Security: A More Secure Website
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Scalability: Capability to Handle Massive Traffic
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-radius50 w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Hosting and Pricing: Saves Your Budget For Good
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      01.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      02.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Less Server-side Dependencies
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      03.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Flexibility: More Freedom to Develop Websites
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      04.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Security: A More Secure Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      05.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Scalability: Capability to Handle Massive Traffic
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      06.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Hosting and Pricing: Saves Your Budget For Good
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Link
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <span className="text-gray_600 text-[18px] font-manrope">
                    Yes, a static website may have all its benefits, but is it
                    suitable for you? That’s a big question. It depends on why
                    you are going to build a website, what purpose it will{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray_900 text-[18px] font-manrope font-semibold underline"
                  >
                    serve
                  </a>
                  <span className="text-gray_600 text-[18px] font-manrope">
                    . That’s why you must when you should use a static website.
                    <br />
                    The followings are the common applications where using the
                    static website is the best choice. -{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray_900 text-[18px] font-manrope font-semibold underline"
                  >
                    Blog sites
                  </a>
                  <span className="text-gray_600 text-[18px] font-manrope">
                    - - Small business websites - Websites Under-Development -
                    Personal Portfolio sites - Websites that contain basic
                    information
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Tables
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites.
                  </Text>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start sm:px-[20px] px-[40px] py-[50px] rounded-radius10 w-[100%]">
                  <div className="overflow-auto w-[100%]">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={"border-bw"}
                      headerClass="border-bw"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Writen by
                </Text>
                <div className="flex flex-col items-center justify-between sm:pr-[20px] md:pr-[40px] pr-[568px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start max-w-[836px] w-[100%]">
                    <Img
                      src="images/img_profilepicture_100x100.png"
                      className="h-[100px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[100px]"
                      alt="profilepicture"
                    />
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[165px]">
                      <Text
                        className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                      >
                        Co-founder and CDO
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_100 h-[8px] rounded-radius50 w-[8px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                      >
                        July 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Recent News
            </Text>
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617_350x384.png"
                    className="h-[350px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Rectangle5617"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Button
                      className="cursor-pointer font-semibold min-w-[89px] text-[14px] text-center text-gray_900 w-[auto]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                        as="h5"
                        variant="h5"
                      >
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            July 20, 2022
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-center pr-[3px] py-[3px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[3px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mr-[15px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            7 min read
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Continue Reading
                  </Text>
                  <Img
                    src="images/img_arrowright_1.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617_350x384.png"
                    className="h-[350px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Rectangle5617 One"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Button
                      className="cursor-pointer font-semibold min-w-[89px] text-[14px] text-center text-gray_900 w-[auto]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                        as="h5"
                        variant="h5"
                      >
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            July 20, 2022
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-center pr-[3px] py-[3px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[3px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mr-[15px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            7 min read
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Continue Reading
                  </Text>
                  <Img
                    src="images/img_arrowright_1.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright One"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617_350x384.png"
                    className="h-[350px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Rectangle5617 Two"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Button
                      className="cursor-pointer font-semibold min-w-[89px] text-[14px] text-center text-gray_900 w-[auto]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                        as="h5"
                        variant="h5"
                      >
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            July 20, 2022
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-center pr-[3px] py-[3px] md:self-stretch sm:self-stretch w-[44%]">
                          <div className="bg-bluegray_100 h-[5px] my-[3px] rounded-radius2 w-[5px]"></div>
                          <Text
                            className="mr-[15px] text-gray_600 text-left w-[auto]"
                            variant="body7"
                          >
                            7 min read
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Continue Reading
                  </Text>
                  <Img
                    src="images/img_arrowright_1.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright Two"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="bg-white_A700 flex items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[80px] w-[100%]">
          <div className="flex flex-1 flex-col gap-[120px] md:gap-[40px] sm:gap-[40px] items-start justify-start w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row font-markoone md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
                <div className="flex flex-row gap-[11px] h-[40px] md:h-[auto] sm:h-[auto] items-center justify-start w-[341px]">
                  <Img
                    src="images/img_home.svg"
                    className="h-[40px] w-[40px]"
                    alt="home Two"
                  />
                  <Text
                    className="font-normal not-italic text-left text-orange_A700 w-[auto]"
                    variant="body1"
                  >
                    Relasto
                  </Text>
                </div>
                <div className="flex flex-col font-manrope gap-[28px] h-[190px] md:h-[auto] sm:h-[auto] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold leading-[160.00%] text-gray_900 text-left"
                    variant="body4"
                  >
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </Text>
                  <Text
                    className="font-semibold leading-[160.00%] text-gray_900 text-left"
                    variant="body4"
                  >
                    +056 686 56 56 98
                    <br />
                    info@staticmania.com
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_plus_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="plus"
                      />
                    </div>
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_twitter_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="twitter One"
                      />
                    </div>
                    <Img
                      src="images/img_instagram_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Img
                      src="images/img_linkedin.svg"
                      className="h-[30px] w-[30px]"
                      alt="linkedin"
                    />
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_clock_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="clock"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col sm:flex-col flex-row font-manrope md:gap-[40px] sm:gap-[40px] gap-[77px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Features
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Home v1
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Home v2
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Search
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Information
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Listing v1
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Listing v2
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Property Details
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Agent List
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Agent Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Documentation{" "}
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Blog
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Others
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Log in
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Enter OTP
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        New Password
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Create Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Text
              className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
              variant="body4"
            >
              © Static Mania 2022. All rights reserved. / Template Documentation
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogDetailsPage;
