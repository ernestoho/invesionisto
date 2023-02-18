import React from "react";

import { Img, Text, Button, GoogleMap, List, Input } from "components";

const PropertyDetailsPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
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
            <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
                <div className="flex flex-1 flex-col items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5610.png"
                    className="h-[550px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5610"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-[24px] h-[550px] md:h-[auto] sm:h-[auto] items-start justify-start sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_rectangle5611_263x384.png"
                    className="h-[263px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5611"
                  />
                  <div className="h-[263px] md:h-[auto] sm:h-[auto] relative sm:w-[100%] w-[384px]">
                    <Img
                      src="images/img_rectangle5612.png"
                      className="h-[263px] m-[auto] object-cover rounded-radius10 w-[100%]"
                      alt="Rectangle5612"
                    />
                    <Button
                      className="absolute flex items-center justify-center min-w-[122px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_mail_24X24.svg"
                          className="mr-[6px] text-center right-[2%] absolute"
                          alt="mail"
                        />
                      }
                      shape="RoundedBorder10"
                      size="xl"
                      variant="FillWhiteA700"
                    >
                      <div className="bg-transparent bottom-[0] cursor-pointer font-bold right-[0] text-[18px] text-gray_900 text-left">
                        3 more
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-start justify-center max-w-[1200px] mx-[auto] md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start p-[40px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-col gap-[44px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text
                            className="leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[712px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                            as="h4"
                            variant="h4"
                          >
                            Trovilla Plan in Sereno Canyon - Estate Collection
                            by Toll Brothers
                          </Text>
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pr-[180px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                          <div className="bg-white_A700 border border-gray_600 border-solid flex flex-1 flex-col items-center justify-center sm:px-[20px] px-[24px] py-[7px] rounded-radius10 md:self-stretch sm:self-stretch w-[100%]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $649,900
                              </Text>
                              <Text
                                className="text-gray_600 text-left w-[auto]"
                                variant="body7"
                              >
                                Online / Cash Payment
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-1 flex-col items-center justify-center sm:px-[20px] px-[24px] py-[7px] rounded-radius10 md:self-stretch sm:self-stretch w-[100%]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $850 / month
                              </Text>
                              <Text
                                className="text-gray_600 text-left w-[auto]"
                                variant="body7"
                              >
                                0% EMI for 6 Months
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Well-constructed 1562 Sq Ft Home Is Now Offering To
                          You In Uttara For Sale
                        </Text>
                        <Text
                          className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[712px] not-italic text-gray_600 text-left"
                          variant="body3"
                        >
                          A slider is great way to display a slideshow featuring
                          images or videos, usually on your homepage. Adding
                          sliders to your site is no longer difficult. You don’t
                          have to know coding anymore. Just use a slider widget
                          and it will automatically insert the slider on your
                          web page. So, the Elementor slider would be a great
                          tool to work with when building a WordPress site.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <Text
                            className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Local Information
                          </Text>
                          <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start pr-[200px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Button
                              className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                              shape="RoundedBorder10"
                              size="md"
                              variant="OutlineBluegray100_1"
                            >
                              Map
                            </Button>
                            <Button
                              className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                              shape="RoundedBorder10"
                              size="3xl"
                              variant="FillGray900"
                            >
                              Schools
                            </Button>
                            <Button
                              className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                              shape="RoundedBorder10"
                              size="3xl"
                              variant="OutlineBluegray100_1"
                            >
                              Crime
                            </Button>
                            <Button
                              className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                              shape="RoundedBorder10"
                              size="md"
                              variant="OutlineBluegray100_1"
                            >
                              Shop & Eat
                            </Button>
                          </div>
                        </div>
                        <div className="h-[400px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                          <GoogleMap
                            className="h-[400px] m-[auto] rounded-radius10 w-[100%]"
                            showMarker={false}
                          ></GoogleMap>
                          <Img
                            src="images/img_group100000142_deep_orange_300.svg"
                            className="absolute h-[54px] inset-[0] m-[auto] w-[389px]"
                            alt="Frame1000001425"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start p-[40px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Home Highlights
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[150px] md:gap-[40px] sm:gap-[40px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-start w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-[10px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row gap-[55px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Parking
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[47px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Outdoor
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[85px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                A/C
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[40px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Year Built
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              2021
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[10px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row gap-[80px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                HOA
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              None
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[32px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Price/Sqft
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              $560
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Listed
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start p-[40px] sm:px-[20px] rounded-radius10 w-[100%]">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Agent Information
                      </Text>
                      <div className="flex flex-row gap-[24px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_rectangle5599_282x282.png"
                          className="h-[150px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[150px]"
                          alt="Rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Bruno Fernandes
                          </Text>
                          <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_star_gray_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="star"
                              />
                              <Img
                                src="images/img_star_gray_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="star One"
                              />
                              <Img
                                src="images/img_star_gray_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="star Two"
                              />
                              <Img
                                src="images/img_star_gray_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="star Three"
                              />
                              <Img
                                src="images/img_star_gray_600.svg"
                                className="h-[16px] w-[16px]"
                                alt="star Four"
                              />
                            </div>
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              4 review
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_mail_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="mail"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body4"
                            >
                              bruno@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_call_gray_600.svg"
                              className="h-[20px] w-[20px]"
                              alt="call"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body4"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex sm:flex-1 flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius10 sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Request for Visit
                      </Text>
                      <div className="flex flex-col gap-[12px] h-[440px] md:h-[auto] sm:h-[auto] items-start justify-start w-[100%]">
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          type="text"
                          name="TextFieldLarge"
                          placeholder="Full Name"
                          prefix={
                            <Img
                              src="images/img_user.svg"
                              className="mr-[14px] my-[auto]"
                              alt="user"
                            />
                          }
                          shape="RoundedBorder10"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          type="email"
                          name="TextFieldLarge One"
                          placeholder="Email Address"
                          prefix={
                            <Img
                              src="images/img_mail.svg"
                              className="mr-[14px] my-[auto]"
                              alt="mail"
                            />
                          }
                          shape="RoundedBorder10"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          type="number"
                          name="TextFieldLarge Two"
                          placeholder="Phone Number"
                          prefix={
                            <Img
                              src="images/img_call_gray_600.svg"
                              className="mr-[14px] my-[auto]"
                              alt="call"
                            />
                          }
                          shape="RoundedBorder10"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge Three"
                          placeholder="Date"
                          prefix={
                            <Img
                              src="images/img_calendar.svg"
                              className="mr-[14px] my-[auto]"
                              alt="calendar"
                            />
                          }
                          shape="RoundedBorder10"
                          variant="OutlineBluegray100"
                        ></Input>
                        <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-[152px] md:h-[auto] sm:h-[auto] items-start justify-start px-[19px] py-[14px] rounded-radius10 w-[100%]">
                          <Text
                            className="font-semibold text-gray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Message
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder10"
                      size="3xl"
                      variant="FillGray900"
                    >
                      Send Request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Latest Property Listings
                </Text>
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="sm"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[18px] text-left text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_260x384.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Ten"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye"
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
                              alt="bookmark"
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
                              alt="ticket"
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
                              alt="icon"
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
                              src="images/img_settings_22.svg"
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
                          className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
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
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_16.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Eleven"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
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
                              src="images/img_settings_23.svg"
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
                          className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
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
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_17.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Twelve"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
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
                              src="images/img_settings_24.svg"
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
                          className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
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
              </List>
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

export default PropertyDetailsPage;
