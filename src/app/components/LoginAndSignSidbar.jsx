import manImage from "/public/arabMan.png";
import logo from "/public/logo.png";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import Image from "next/image";

const LoginAndSignSidbar = ({ isArabic }) => {
  return (
    <aside
      className={ `max-[970px]:hidden flex flex-col bg-[#F7F8FA] p-6 w-1/3 h-full  min-h-[100vh] pb-0 ${
        isArabic ? "right-0 text-right" : "left-0 text-left"
      } shadow-md relative`}
      style={{
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <div>
        <Image src={logo} className="mt-8 mb-4" alt="logo" quality={100} />

        <p className="mt-2 text-[var(--text)] text-[28px] font-semibold max-xl:text-[24px] max-lg:text-[20px]">
          {isArabic
            ? "الحل الأمثل لتبسيط وإدارة طلبات عروض الأسعار بكفاءة"
            : "The ideal solution to simplify and manage RFQs effectively"}
        </p>
      </div>

      <ul className="mt-8 space-y-6 text-[var(--text)]">
        <li className="flex items-center gap-2  justify-start">
          <IoIosCheckmarkCircleOutline  className="self-start mt-[2px] text-2xl text-[var(--text)] "/>

          <div>
            <h3 className="font-semibold text-[20px] max-xl:text-[16px]">
              {isArabic
                ? "إدارة الطلبات بفعالية"
                : "Manage Requests Effectively"}
            </h3>
            <p className="text-base max-xl:text-sm">
              {isArabic
                ? "يوفر الموقع لوحة تحكم متكاملة لمتابعة الطلبات بسهولة"
                : "The platform offers an integrated dashboard for easy tracking"}
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <IoIosCheckmarkCircleOutline  className="self-start mt-[2px] text-2xl text-[var(--text)] "  />
          <div>
            <h3 className="font-semibold text-[20px] max-xl:text-[16px]">
              {isArabic
                ? "إرسال الإشعارات المخصصة"
                : "Send Custom Notifications"}
            </h3>
            <p className="text-base max-xl:text-sm">
              {isArabic
                ? "تمكن الإدارة من إرسال إشعارات فورية مخصصة للمستخدمين"
                : "Allow admins to send instant custom notifications"}
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <IoIosCheckmarkCircleOutline  className="self-start mt-[2px] text-2xl text-[var(--text)] "  />
          <div>
            <h3 className="font-semibold text-[20px] max-xl:text-[16px]">
              {isArabic ? "تسجيل مستخدمين بسهولة" : "Easy User Registration"}
            </h3>
            <p className="text-base max-xl:text-sm">
              {isArabic
                ? "واجهة تسجيل بسيطة وآمنة تتيح إضافة مستخدمين جدد بسرعة"
                : "A simple and secure registration interface"}
            </p>
          </div>
        </li>
      </ul>

      <div className="relative mt-auto self-center max-w-96  h-80 ">
        <div className="absolute top-[14%] left-[46%] -translate-x-[55%] w-48 h-48  bg-green-500 rounded-full max-xl:w-[170px]  max-xl:h-[170px] max-xl:top-[24%]"></div>
        <Image
          src={manImage}
          alt="Man"
          className="absolute bottom-0 left-[50%] -translate-x-1/2 max-w-[350px] h-auto max-xl:max-w-[300px]  "
        />
      </div>
    </aside>
  );
};

export default LoginAndSignSidbar