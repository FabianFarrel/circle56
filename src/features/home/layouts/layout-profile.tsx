import { Text } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ButtonLink } from "../buttons/link";
import { ProfileStatus } from "../page-profile/profile-status";
import { ProfileTabs } from "../page-profile/profile-tab";
import { useUser } from "../hooks/use-user";
import { useNavigate } from "react-router-dom";

export function ProfileLayout() {
    const { data } = useUser();
    const navigate = useNavigate();
    return (
        <>
            <ButtonLink onClick={() => navigate(-1)} color={'white'} textDecoration={'none'} to={"/"} bg={'none'}>
                <Text
                fontSize={'20px'}
                    as={'h2'}
                    mt={'15px'}
                    px={'25px'}
                    display={'flex'}
                    transition={'0.3s'}
                    color={'white'}
                    alignItems={'center'}
                    _hover={{color: 'home.hoverText'}}><IoIosArrowRoundBack style={{ marginRight: '5px', fontSize: '30px' }} /> {data?.fullName} </Text>
            </ButtonLink>

            <ProfileStatus />
            <ProfileTabs />
        </>
    )
}