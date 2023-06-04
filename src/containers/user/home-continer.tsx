import { useTranslation } from "react-i18next";

function HomeContainer() {
    const { t } = useTranslation();
    return (
        <div className="relative">
            <img className="object-cover w-full h-[400px]" src="/assets/images/Rectangle 1.png" alt="" />
            <div className="absolute top-10 left-20 px-6 py-4 grid grid-cols-2 gap-4
            sm:text-left sm:px-0 sm:top-5 sm:left-6 sm:py-0 sm:grid-cols-1">
                <div>
                    <h4 className="pt-[20px] mb-3 text-[35px] font-subTitle text-whiteColor
                    sm:text-[20px]">{t('home.page.your')}</h4>
                    <hr className="w-full pb-[10px]" />
                    <p className="text-whiteColor justify-center items-center font-title
                    sm:text-[12px]">{t('home.page.content')}</p>

                    <h4 className="pt-[20px] mb-3 text-[30px] font-title text-whiteColor
                    sm:text-[20px]">{t('home.page.off')}</h4>
                    <input type="text" className=" bg-transparent border-2 border-white text-white w-[348px] h-[42px] sm:w-[300px] rounded-2xl justify-center items-center ml-[30px] p-5 placeholder-white" placeholder="Enter your E-Mail: ">
                    </input>
                    <button className="bg-orangeColor border-2 border-white text-white w-[174px] h-[42px] 
                    sm:w-[150px] sm:mt-5 sm:mb-5 rounded-2xl justify-center items-center ml-[30px]">
                        {t('home.page.subscribe')}</button>
                </div>
                <div>
                    <div className="relative p-5 ml-[100px] w-[440px] h-[300px] bg-whiteColor sm:ml-0 sm:w-[360px]">
                        <h2 className=" text-blackColor font-subTitle text-[28px] sm:text-[18px]">
                            MORE NEWS
                        </h2>
                        <hr />
                        <div>
                            <h4 className="pt-[20px] text-[16px] sm:text-[14px] font-title text-orangeColor">{t('home.page.your')}</h4>
                            <p className="text-blackColor text-[10px] font-subTitle">{t('home.page.content')}</p>
                        </div>
                        <div>
                            <h4 className="pt-[20px] text-[16px] sm:text-[14px] font-title text-orangeColor">{t('home.page.your')}</h4>
                            <p className="text-blackColor text-[10px] font-subTitle">{t('home.page.content')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-20 pt-[10px] sm:left-9 sm:pt-[280px] sm:mt-8">
                <h4 className="mb-3 text-[25px] font-title text-blackColor">{t('home.page.discovery')}</h4>
                <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-4 sm:justify-center sm:items-center">
                    {/* 1 */}
                    <div className="rounded border border-black w-10/12">
                        <img className="w-full" src="/assets/images/Rectangle 6.png" alt="" />
                        <div className="font-subTitle px-2 py-2">
                            <div className="text-[14px] font-bold">Lorem ipsum dolor</div>
                            <p className="text-[12px]">Lorem ipsum dolor
                                sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <p>2 days ago</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="rounded border border-black w-10/12">
                        <img className="w-full" src="/assets/images/Rectangle 9.png" alt="" />
                        <div className="font-subTitle px-2 py-2">
                            <div className="text-[14px] font-bold">Lorem ipsum dolor</div>
                            <p className="text-[12px]">Lorem ipsum dolor
                                sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <p>2 days ago</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="rounded border border-black w-10/12">
                        <img className="w-full" src="/assets/images/Rectangle 11.png" alt="" />
                        <div className="font-subTitle px-2 py-2">
                            <div className="text-[14px] font-bold">Lorem ipsum dolor</div>
                            <p className="text-[12px]">Lorem ipsum dolor
                                sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <p>2 days ago</p>
                        </div>
                    </div>
                </div>
                <br />
                <h4 className="mb-3 text-[25px] font-title text-blackColor">{t('home.page.photography')}</h4>

                {/* photo 1 */}
                <div className="relative grid grid-rows-2 sm:grid-cols-1">
                    <div>
                        <img className="w-[1010px] h-[400px]
                        sm:w-[300px]" src="/assets/images/Rectangle 12.png" alt="" />
                        <div className="absolute inset-x-0 top-0 px-6 py-4 grid grid-cols-2 
                        sm:grid-cols-1 sm:px-0">
                            <div>
                                <h4 className="pt-[150px] sm:pl-2 text-[25px] sm:text-[16px] font-title text-whiteColor">{t('home.page.happen')}</h4>
                                <p className="text-[16px] sm:pl-2 sm:text-[10px] text-whiteColor font-subTitle">Lorem ipsum dolor
                                    sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                            </div>
                            {/* ?? */}
                            <div className="ml-[280px] rounded border border-black w-[460px] sm:w-[300px] sm:ml-0 sm:mt-48 ">
                                <img className="w-full " src="/assets/images/Rectangle 15.png" alt="" />
                                <div className="font-subTitle px-2 py-2">
                                    <div className="text-[14px] font-bold">Lorem ipsum dolor</div>
                                    <p className="text-[12px]">Lorem ipsum dolor
                                        sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <p>2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* photo 2 */}
                    <div className="relative pt-5 sm:pt-40">
                        <img className="w-[1010px] h-[400px]
                        sm:w-[300px]" src="/assets/images/Rectangle 13.png" alt="" />
                        <div className="absolute inset-x-0 top-0 px-6 py-4 grid grid-cols-2 gap-4 
                        sm:grid-cols-1 sm:px-0 sm:top-44">
                            <div>
                                <h4 className="pt-[150px] sm:pl-2 text-[25px] sm:text-[16px] font-title text-whiteColor">{t('home.page.happen')}</h4>
                                <p className="text-[16px] sm:pl-2 sm:text-[10px] text-whiteColor font-subTitle">Lorem ipsum dolor
                                    sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                            </div>
                            {/* ?? */}
                            <div className="ml-[280px] sm:w-[300px] rounded border border-black w-[460px] sm:ml-0 sm:mt-40 sm:mb-40">
                                <img className="w-full" src="/assets/images/Rectangle 17.png" alt="" />
                                <div className="font-subTitle px-2 py-2">
                                    <div className="text-[14px] font-bold">Lorem ipsum dolor</div>
                                    <p className="text-[12px]">Lorem ipsum dolor
                                        sit amet consectetur. Lectus diam turpis condimentum convallis in. Ac lorem cras laoreet proin suscipit tempor nibh fermentum.</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <p>2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>
            </div>
        </div>
    );
}

export default HomeContainer;