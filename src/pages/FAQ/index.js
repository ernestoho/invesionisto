import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone md:gap-[40px] sm:gap-[40px] gap-[68px] items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
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
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              Search Property / Anything
            </Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                wrapClassName="flex gap-[8px] w-[100%]"
                name="search One"
                placeholder="Search Property / Anything"
                prefix={
                  <Img
                    src="images/img_search_1.svg"
                    className="cursor-pointer mr-[14px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#6e6e6e"
                    />
                  ) : inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#6e6e6e"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder10"
                size="smSrc"
                variant="srcOutlineBluegray100"
              ></Input>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-start justify-start sm:px-[20px] px-[30px] py-[28px] rounded-radius10 w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start max-w-[732px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      You&#39;re viewing sample results.
                    </Text>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="common-pointer font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                        onClick={() => navigate("")}
                      >
                        https://staticmania.com
                      </Text>
                      <Text
                        className="leading-[150.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[732px] not-italic text-gray_600 text-left"
                        variant="body5"
                      >
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://staticmania.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_100 w-[100%]" />
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        You&#39;re viewing sample results.
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://staticmania.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
