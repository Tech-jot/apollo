import React from 'react';
import css from './iconcard.module.css';
import { string } from 'prop-types';

const RIGHTARROW = 'rightarrow';
const AUTOMATION = "automation";
const ROBOTICS = "robotics";
const CONVEYORS = "conveyors";
const IOT = "iot";
const CUSTOMSOLUTION = "customsolution";
const CUNSULTANT = "cunsultant";

const IconCard = props => {
    const { type } = props;

    switch (type) {
        case CUNSULTANT:
            return (
                <svg width="87" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <path d="M46.3623 71.0677V63.4699L46.4095 62.7755C47.0173 53.8408 53.4771 46.4199 62.1846 44.6536C64.5303 44.1778 66.9464 44.1778 69.2921 44.6536C77.9995 46.4199 84.4595 53.8408 85.0671 62.7755L85.1144 63.4699V71.0677M72.6936 72.5578C72.3655 70.8567 72.3655 69.1079 72.6936 67.4069C73.2206 64.6728 75.2289 62.4706 77.8867 61.7122L78.4504 61.5512C79.0365 61.3839 79.6426 61.2992 80.2516 61.2992C82.9373 61.2992 85.1144 63.4944 85.1144 66.2024V73.7622C85.1144 76.4703 82.9373 78.6655 80.2516 78.6655C79.6426 78.6655 79.0365 78.5807 78.4504 78.4134L77.8867 78.2525C75.2289 77.4939 73.2206 75.2918 72.6936 72.5578ZM58.7831 72.5578C59.1111 70.8567 59.1111 69.1079 58.7831 67.4069C58.256 64.6728 56.2478 62.4706 53.59 61.7122L53.0262 61.5512C52.4402 61.3839 51.8341 61.2992 51.2251 61.2992C48.5394 61.2992 46.3623 63.4944 46.3623 66.2024V73.7622C46.3623 76.4703 48.5394 78.6655 51.2251 78.6655C51.8341 78.6655 52.4402 78.5807 53.0262 78.4134L53.59 78.2525C56.2478 77.4939 58.256 75.2918 58.7831 72.5578Z" stroke="black" stroke-width="3" />
                </svg>
            );
        case CUSTOMSOLUTION:
            return (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51 26V50H27V26H51ZM37.1015 32H34.7642L30.3266 44H32.4353L33.2731 41.6541H38.5852L39.405 44H41.6407L37.1015 32ZM45.3838 32H43.2836V44H45.3838V32ZM35.9151 34.0133L38.0071 40H33.8564L35.9151 34.0133ZM53 44H57V48H53V44ZM29 52H33V56H29V52ZM37 52H41V56H37V52ZM29 20H33V24H29V20ZM45 52H49V56H45V52ZM37 20H41V24H37V20ZM45 20H49V24H45V20ZM53 36H57V40H53V36ZM21 44H25V48H21V44ZM53 28H57V32H53V28ZM21 36H25V40H21V36ZM21 28H25V32H21V28Z" fill="black" />
                </svg>
            );
        case RIGHTARROW:
            return (
                <svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z" fill="#FA8114" />
                </svg>
            );
        case AUTOMATION:
            return (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <g clip-path="url(#clip0_214_39)">
                        <path d="M32.3115 30.9217C34.8389 36.9953 37.4627 43.3022 40.1255 49.7024C41.8975 50.1191 42.2876 50.5233 42.5353 52.5102C42.6527 53.449 42.7178 54.3935 42.73 55.3391C42.7508 57.0553 42.0312 57.8508 40.3235 57.8308C37.3888 57.7962 34.4555 57.6415 31.521 57.5732C30.3493 57.546 29.1738 57.5833 28.0034 57.6496C27.1292 57.6991 26.6319 57.4717 26.5616 56.6188C26.4023 54.9973 26.3464 53.3672 26.3943 51.7385C26.456 50.3815 27.3255 49.7194 28.7596 49.626C29.2146 49.5962 29.6728 49.6111 30.1295 49.6087C30.5825 49.6066 31.0355 49.6087 31.6497 49.6087C31.3223 48.4314 31.0551 47.3442 30.7173 46.2794C29.5061 42.4619 28.271 38.6518 27.0445 34.839C27.0054 34.7149 26.9499 34.595 26.9184 34.4692C26.697 33.5851 26.6929 32.5461 26.1984 31.8599C25.7452 31.2312 24.7313 31.0322 24.0211 30.5588C20.3119 28.0865 20.0768 22.1538 23.5589 19.3605C25.7693 17.5873 29.7028 17.7812 32.1011 19.81C32.5835 20.1986 33.0071 20.6552 33.3583 21.1656C33.4816 21.3922 33.6714 21.5755 33.9021 21.6908C34.1329 21.8061 34.3934 21.8479 34.6487 21.8105C38.4852 21.5417 42.3257 21.3227 46.1589 21.0133C48.475 20.8264 48.4707 20.7665 49.2985 22.9218C50.4435 22.7898 51.5977 22.6773 52.7434 22.5063C52.9619 22.4736 53.1834 22.2394 53.3392 22.0462C53.9732 21.2598 54.5882 20.4573 55.2004 19.6528C55.9977 18.6041 56.707 18.4035 57.9225 18.9334C58.5565 19.1923 59.1744 19.4889 59.773 19.8216C60.4756 20.234 60.7091 20.8931 60.4518 21.4673C60.1971 22.0355 59.5419 22.3037 58.7747 22.0897C58.364 21.984 57.9727 21.814 57.615 21.586C57.0553 21.2083 56.6747 21.3436 56.2953 21.8376C56.0267 22.166 55.738 22.4774 55.4312 22.77C54.4216 23.7925 54.3664 24.7425 55.2231 25.9047C55.8422 26.7444 56.4431 27.5971 57.0258 28.4629C57.3294 28.9135 57.6694 29.0124 58.1882 28.8434C58.7392 28.6433 59.3168 28.5273 59.9025 28.4991C60.2159 28.4962 60.7434 28.785 60.7941 29.023C60.8625 29.3441 60.6697 29.9111 60.404 30.0779C59.5416 30.6034 58.6401 31.0615 57.707 31.4481C56.9234 31.7843 56.2873 31.3894 55.8398 30.7693C55.0386 29.6601 54.2416 28.5414 53.5476 27.3655C53.2321 26.8316 52.8879 26.6365 52.3132 26.6341C51.661 26.6471 51.0088 26.6078 50.3627 26.5166C49.6717 26.4016 49.3522 26.7125 49.1047 27.2883C48.5863 28.4956 48.544 28.456 47.2031 28.4658C45.3779 28.4793 43.5525 28.6433 41.7285 28.6225C39.579 28.5979 37.4292 28.4713 35.2827 28.3287C34.7037 28.2895 34.3279 28.3483 33.9812 28.8798C33.5403 29.5565 32.9598 30.1429 32.3115 30.9217ZM32.8048 25.5283C32.7404 22.3962 30.4459 20.1814 27.3686 20.2814C24.8896 20.3619 23.1308 22.319 23.1655 24.9567C23.2017 27.7023 25.1535 29.6631 27.8909 29.5708C30.941 29.4683 33.0597 27.2117 32.8048 25.5283ZM28.2887 31.8002C28.2884 31.9439 28.3033 32.0872 28.3331 32.2277C28.841 33.6699 29.3733 35.1034 29.8668 36.5503C31.2829 40.7023 32.6771 44.8617 34.1067 49.0087C34.2047 49.2902 34.5031 49.6729 34.7447 49.7015C35.5033 49.7914 36.2795 49.7344 37.1396 49.7344L30.3288 31.4213L28.2887 31.8002ZM35.0779 26.7809L47.3109 26.4372C47.2233 26.0107 47.1563 25.7014 47.0967 25.3906C47.0293 25.0391 46.9641 24.6871 46.9057 24.334C46.7333 23.2907 46.7349 23.2899 45.6714 23.2937C42.4465 23.3053 39.2217 23.317 35.997 23.3288C35.5889 23.3303 35.1806 23.3288 34.7652 23.3288C34.8667 24.4524 34.9602 25.4823 35.0779 26.7809ZM28.6748 55.1717H39.8937V52.0779H28.8598C28.7941 53.1708 28.7348 54.1657 28.6748 55.1717Z" fill="black" />
                        <path d="M27.6175 27.1291C26.5335 27.114 25.5985 26.5413 25.3564 25.7415C25.0695 24.7954 25.4653 23.7416 26.3556 23.0827C27.9586 21.8952 29.6145 22.3176 30.1412 24.0484C30.6324 25.6657 29.4137 27.1541 27.6175 27.1291Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_214_39">
                            <rect width="40" height="40" fill="white" transform="translate(21 18)" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case ROBOTICS:
            return (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <path d="M29.5977 29.7734C29.5977 30.4417 29.8631 31.0825 30.3356 31.555C30.8081 32.0275 31.449 32.293 32.1172 32.293C32.7854 32.293 33.4263 32.0275 33.8988 31.555C34.3713 31.0825 34.6367 30.4417 34.6367 29.7734C34.6367 29.1052 34.3713 28.4644 33.8988 27.9919C33.4263 27.5194 32.7854 27.2539 32.1172 27.2539C31.449 27.2539 30.8081 27.5194 30.3356 27.9919C29.8631 28.4644 29.5977 29.1052 29.5977 29.7734ZM52.7773 18.6875H24.2227C23.4794 18.6875 22.8789 19.288 22.8789 20.0312V47.7461C22.8789 48.4894 23.4794 49.0898 24.2227 49.0898H52.7773C53.5206 49.0898 54.1211 48.4894 54.1211 47.7461V20.0312C54.1211 19.288 53.5206 18.6875 52.7773 18.6875ZM51.4336 46.4023H25.5664V21.375H51.4336V46.4023ZM42.3633 29.7734C42.3633 30.4417 42.6287 31.0825 43.1012 31.555C43.5737 32.0275 44.2146 32.293 44.8828 32.293C45.551 32.293 46.1919 32.0275 46.6644 31.555C47.1369 31.0825 47.4023 30.4417 47.4023 29.7734C47.4023 29.1052 47.1369 28.4644 46.6644 27.9919C46.1919 27.5194 45.551 27.2539 44.8828 27.2539C44.2146 27.2539 43.5737 27.5194 43.1012 27.9919C42.6287 28.4644 42.3633 29.1052 42.3633 29.7734ZM52.8697 53.1211H24.1303C23.4374 53.1211 22.8789 53.7216 22.8789 54.4648V55.9766C22.8789 56.1613 23.0175 56.3125 23.1896 56.3125H53.8062C53.9783 56.3125 54.1169 56.1613 54.1169 55.9766V54.4648C54.1211 53.7216 53.5626 53.1211 52.8697 53.1211ZM44.8828 37.332H32.1172C31.9324 37.332 31.7812 37.4832 31.7812 37.668V40.1875C31.7812 40.3723 31.9324 40.5234 32.1172 40.5234H44.8828C45.0676 40.5234 45.2188 40.3723 45.2188 40.1875V37.668C45.2188 37.4832 45.0676 37.332 44.8828 37.332Z" fill="black" />
                </svg>
            );
        case CONVEYORS:
            return (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <path d="M44.4209 43.1479C41.3214 43.1479 38.7998 45.6475 38.7998 48.7199C38.7998 51.7922 41.3213 54.2915 44.4209 54.2915C47.5204 54.2915 50.0421 51.7922 50.0421 48.7199C50.0421 45.6475 47.5204 43.1479 44.4209 43.1479ZM44.4209 52.7305C42.1898 52.7305 40.3746 50.9313 40.3746 48.7199C40.3746 46.5083 42.1897 44.7089 44.4209 44.7089C46.6521 44.7089 48.4673 46.5083 48.4673 48.7199C48.4673 50.9313 46.6521 52.7305 44.4209 52.7305Z" fill="black" />
                    <path d="M44.4208 46.464C43.1659 46.464 42.145 47.4759 42.145 48.72C42.145 49.9638 43.1659 50.9758 44.4208 50.9758C45.6757 50.9758 46.6966 49.9638 46.6966 48.72C46.6967 47.4759 45.6757 46.464 44.4208 46.464Z" fill="black" />
                    <path d="M24.6983 43.1479C21.5988 43.1479 19.0771 45.6475 19.0771 48.7199C19.0771 51.7922 21.5988 54.2915 24.6983 54.2915C27.7979 54.2915 30.3195 51.7922 30.3195 48.7199C30.3194 45.6475 27.7978 43.1479 24.6983 43.1479ZM24.6983 52.7305C22.4671 52.7305 20.6519 50.9313 20.6519 48.7199C20.6519 46.5083 22.4671 44.7089 24.6983 44.7089C26.9295 44.7089 28.7448 46.5083 28.7448 48.7199C28.7447 50.9313 26.9295 52.7305 24.6983 52.7305Z" fill="black" />
                    <path d="M24.6981 46.464C23.4433 46.464 22.4224 47.4759 22.4224 48.72C22.4224 49.9638 23.4433 50.9758 24.6981 50.9758C25.953 50.9758 26.9738 49.9638 26.9738 48.72C26.9738 47.4759 25.953 46.464 24.6981 46.464Z" fill="black" />
                    <path d="M59.9667 45.647H55.2695V34.8728C55.2695 33.8106 54.3976 32.9463 53.3259 32.9463H52.9569V20.7805C52.9569 20.3493 52.6044 20 52.1696 20C51.7347 20 51.3822 20.3493 51.3822 20.7805V33.7268V37.8126C51.0407 37.6571 50.6615 37.5698 50.2619 37.5698C50.2604 37.5698 50.259 37.57 50.2575 37.57H47.7131L42.4851 20.5531C42.3842 20.2246 42.0783 20 41.7319 20H23.4858C23.0509 20 22.6984 20.3493 22.6984 20.7805V25.7621H20.23C19.7951 25.7621 19.4426 26.1114 19.4426 26.5426V32.8224H17.5968C16.1649 32.8224 15 33.9771 15 35.3964V48.7199C15 49.1508 15.3525 49.5004 15.7874 49.5004H16.9968C17.4316 49.5004 17.7842 49.1508 17.7842 48.7199C17.7842 44.941 20.8858 41.8666 24.6981 41.8666C28.5105 41.8666 31.6121 44.941 31.6121 48.7199C31.6121 49.1508 31.9646 49.5004 32.3994 49.5004H36.7197C37.1545 49.5004 37.507 49.1508 37.507 48.7199C37.507 44.941 40.6086 41.8666 44.421 41.8666C48.2335 41.8666 51.3351 44.941 51.3351 48.7199C51.3351 49.1508 51.6876 49.5004 52.1224 49.5004H52.1696H59.9667C61.0385 49.5004 61.9104 48.6361 61.9104 47.5736C61.9104 46.5113 61.0385 45.647 59.9667 45.647ZM46.0669 37.5701H33.3213V35.3964C33.3213 33.9771 32.1565 32.8224 30.7246 32.8224H27.5292V21.5609H41.1487L46.0669 37.5701ZM21.0174 27.323H22.6984V32.8224H21.0174V27.323ZM44.4209 40.3057C40.0056 40.3057 36.3669 43.6643 35.9684 47.9394H33.1505C32.7521 43.6643 29.1133 40.3057 24.698 40.3057C20.8746 40.3057 17.6337 42.8237 16.5746 46.275V35.3964C16.5746 34.8378 17.0331 34.3834 17.5967 34.3834H30.7245C31.288 34.3834 31.7465 34.8378 31.7465 35.3964V38.3506C31.7465 38.7818 32.099 39.1311 32.5339 39.1311H50.2602C50.2612 39.1311 50.2622 39.1311 50.2631 39.1311C50.8802 39.1317 51.382 39.6296 51.382 40.2415V43.911C49.8462 41.7334 47.299 40.3057 44.4209 40.3057ZM59.9667 47.9394H56.7629L56.4087 47.2079H59.9667C60.1702 47.2079 60.3357 47.3719 60.3357 47.5735C60.3357 47.7752 60.1701 47.9394 59.9667 47.9394Z" fill="black" />
                </svg>
            );
        case IOT:
            return (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="38" fill="#0591CB" fill-opacity="0.09" />
                    <g clip-path="url(#clip0_214_42)">
                        <path d="M52.375 45.75C52.375 48.3053 50.3053 50.375 47.75 50.375C45.1947 50.375 43.125 48.3053 43.125 45.75C43.125 43.1947 45.1947 41.125 47.75 41.125C50.3053 41.125 52.375 43.1947 52.375 45.75Z" fill="black" />
                        <path d="M47.0562 55C45.2062 55 43.3562 54.5375 41.7375 53.3813L27.4 45.75C26.2438 44.825 25.3187 44.3625 24.3937 43.4375C21.6187 40.6625 20 36.7313 20 32.8C20 28.8688 21.6187 25.1688 24.3937 22.3937C27.1688 19.6187 30.8688 18 34.8 18C38.7313 18 42.4312 19.6187 45.4375 22.3937C46.3625 23.3187 46.825 24.0125 47.75 25.1687L55.8438 39.9688C58.1562 43.9 57.4625 48.7563 54.225 51.9937C52.1437 54.075 49.8312 55 47.0562 55ZM34.8 20.3125C31.5625 20.3125 28.325 21.7 26.0125 24.0125C23.7 26.325 22.3125 29.5625 22.3125 32.8C22.3125 36.2688 23.7 39.275 26.0125 41.5875C26.7062 42.2812 27.4 42.7437 28.5563 43.4375L43.125 51.3C44.5125 52.225 45.9 52.4562 47.2875 52.4562C49.3687 52.4562 51.2188 51.7625 52.6063 50.1437C55.15 47.6 55.6125 43.9 53.7625 40.8937L45.6688 26.0938C44.975 25.1687 44.5125 24.475 43.8188 23.7812C41.275 21.7 38.2688 20.3125 34.8 20.3125Z" fill="black" />
                        <path d="M45.4375 34.1875V31.875L42.2 30.7188C41.9688 30.2562 41.9688 30.025 41.7375 29.5625L43.125 26.5563L41.5063 24.9375L38.5 26.325C38.0375 26.0937 37.8062 26.0938 37.3438 25.8625L36.1875 22.625H33.875L32.7188 25.8625C32.2562 26.0938 32.025 26.0937 31.5625 26.325L28.5563 24.9375L26.9375 26.5563L28.325 29.5625C28.0937 30.025 28.0938 30.2562 27.8625 30.7188L24.625 31.875V34.1875L27.8625 35.3438C28.0938 35.8062 28.0937 36.0375 28.325 36.5L26.9375 39.5063L28.5563 41.125L31.5625 39.7375C32.025 39.9688 32.2562 40.2 32.7188 40.2L33.875 43.4375H36.1875L37.3438 40.2C37.8062 39.9688 38.0375 39.9688 38.5 39.7375L41.5063 41.125L43.125 39.5063L41.7375 36.5C41.9688 36.0375 42.2 35.8062 42.2 35.3438L45.4375 34.1875ZM35.0312 36.5C33.1812 36.5 31.5625 34.8813 31.5625 33.0312C31.5625 31.1812 33.1812 29.5625 35.0312 29.5625C36.8813 29.5625 38.5 31.1812 38.5 33.0312C38.5 34.8813 36.8813 36.5 35.0312 36.5Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_214_42">
                            <rect width="37" height="37" fill="white" transform="translate(20 18)" />
                        </clipPath>
                    </defs>
                </svg>
            );
        default:
            return (
                <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M26.58 19H2.42A2.4004 2.4004 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4004 2.4004 0 0 1 29 2.38v14.25c-.0165 1.3216-1.0984 2.3811-2.42 2.37zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z"
                            fill="#DADDE2"
                        />
                        <path
                            d="M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z"
                            fill="#B2B6C1"
                        />
                    </g>
                </svg>
            );
    }
};

IconCard.defaultProps = {
    type: 'default',
};

IconCard.propTypes = {
    type: string,
};

export default IconCard;
