import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  GoogleMap,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const ListingMapViewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-center w-[100%]">
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
          <div className="flex flex-col font-manrope items-center justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <Text
                className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 flex-col h-[60px] md:h-[auto] sm:h-[auto] items-start justify-start px-[16px] py-[14px] rounded-radius10 md:self-stretch sm:self-stretch w-[100%]">
                    <Input
                      className="font-semibold p-[0] text-[18px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                      wrapClassName="flex sm:w-[100%] w-[98%]"
                      name="Frame1000001565"
                      placeholder="Enter your address"
                      suffix={
                        <Img
                          src="images/img_search_24X24.svg"
                          className="ml-[12px] my-[auto]"
                          alt="search"
                        />
                      }
                      size="sm"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <SelectBox
                      className="font-bold pr-[16px] text-[18px] text-gray_700 text-left w-[100%]"
                      placeholderClassName="text-gray_700"
                      name="DropdownLarge"
                      placeholder="Buy"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <SelectBox
                    className="md:flex-1 sm:flex-1 font-bold pr-[16px] text-[18px] text-gray_700 text-left md:w-[100%] sm:w-[100%] w-[18%]"
                    placeholderClassName="text-gray_700"
                    name="price"
                    placeholder="$15000 - $18000"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                    size="lg"
                  ></SelectBox>
                  <div className="flex flex-row gap-[20px] items-start justify-start w-[260px]">
                    <SelectBox
                      className="font-bold pr-[16px] text-[18px] text-gray_700 text-left sm:w-[100%] w-[47%]"
                      placeholderClassName="text-gray_700"
                      name="DropdownLarge One"
                      placeholder="Bed - 3"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                      size="lg"
                    ></SelectBox>
                    <Button
                      className="flex items-center justify-center text-center"
                      rightIcon={
                        <Img
                          src="images/img_plus_gray_700.svg"
                          className="ml-[12px] text-center"
                          alt="plus"
                        />
                      }
                      shape="RoundedBorder10"
                      size="6xl"
                      variant="OutlineBluegray100"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_700 text-left">
                        More
                      </div>
                    </Button>
                  </div>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_search_70X70.svg"
                        className="ml-[10px] text-center"
                        alt="search"
                      />
                    }
                    shape="RoundedBorder10"
                    size="6xl"
                    variant="FillGray900"
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[18px] text-left text-white_A700">
                      Search
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap gap-[10px] items-start justify-start max-w-[1200px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="ml-[8px] text-center"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700 text-left">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="ml-[8px] text-center"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700 text-left">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="ml-[8px] text-center"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700 text-left">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="ml-[8px] text-center"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_900 text-left">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="ml-[8px] text-center"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_900 text-left">
                      New Construction
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] md:self-stretch sm:self-stretch w-[100%]">
              <div className="h-[428px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                <GoogleMap
                  className="h-[428px] m-[auto] rounded-radius10 w-[100%]"
                  showMarker={false}
                ></GoogleMap>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-end justify-center m-[auto] p-[67px] sm:px-[20px] md:px-[40px] w-[91%]"
                  style={{ backgroundImage: "url('images/img_group6360.svg')" }}
                >
                  <div className="bg-white_A700 border border-gray_600 border-solid flex flex-col items-start justify-start mb-[15px] mt-[24px] px-[16px] py-[24px] rounded-radius8 w-[308px]">
                    <div className="flex flex-col gap-[21.66px] items-start justify-start w-[276px]">
                      <div className="flex flex-row gap-[9.63px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[19px] w-[19px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 text-gray_900 text-left w-[auto]"
                          variant="body6"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[16.84px] grid items-start w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[16px] w-[16px]"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[16px] w-[16px]"
                              alt="ticket"
                            />
                            <Text
                              className="text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[16px] w-[16px]"
                              alt="icon"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_iocnmenu_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="iocnmenu"
                            />
                            <Text
                              className="text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <Text
                          className="text-gray_900 text-left tracking-ls0385 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="md:gap-[20px] sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_260x384.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye One"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark One"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket One"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon One"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_13.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_16.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image One"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Two"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Two"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Two"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Two"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_14.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings One"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_16.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Two"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Three"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Three"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Three"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Three"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_15.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Two"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_18.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Three"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Four"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Four"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Four"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Four"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_16.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Three"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_19.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Four"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Five"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Five"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Five"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Five"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_17.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Four"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_19.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Five"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Six"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Six"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Six"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Six"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_18.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Five"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_20.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Six"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Seven"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Seven"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Seven"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Seven"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_19.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Six"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_17.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Seven"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Eight"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Eight"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Eight"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Eight"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_20.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Seven"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[512px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_image_17.png"
                      className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Eight"
                    />
                    <div className="bg-white_A700 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye Nine"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-[20px] w-[20px]"
                                alt="bookmark Nine"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                3 Bed Room
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_ticket_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="ticket Nine"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1 Bath
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_icon_20X20.svg"
                                className="h-[20px] w-[20px]"
                                alt="icon Nine"
                              />
                              <Text
                                className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                1,032 sqft
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_settings_21.svg"
                                className="h-[20px] w-[20px]"
                                alt="settings Eight"
                              />
                              <Text
                                className="font-semibold text-gray_700 text-left w-[auto]"
                                variant="body4"
                              >
                                Family
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                            onClick={() => navigate("/propertydetails")}
                            shape="RoundedBorder10"
                            size="3xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                  <Button
                    className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineGray700"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineBluegray102"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineBluegray102"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineBluegray102"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineBluegray102"
                  >
                    5
                  </Button>
                </div>
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowright_16X16.svg"
                      className="ml-[4px] text-center"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder10"
                  size="2xl"
                  variant="OutlineBluegray102"
                >
                  <div className="bg-transparent cursor-pointer font-semibold text-[16px] text-gray_900 text-left">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
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
                        alt="twitter"
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

export default ListingMapViewPage;
