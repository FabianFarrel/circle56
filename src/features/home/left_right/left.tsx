import { Box, Button, Heading, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { ButtonLink } from "../buttons/link";
import { PostModal } from "../modal/post-modal";
import { useLogout } from "../hooks/use-logout";

export function SideLeftNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const logout = useLogout();

    return (
        <Box ml={'20px'}>
            <Heading
                as='h1'
                ms={'20px'}
                color={'#04A51E'}
                display={"flex"}
                fontSize={'70px'}
                paddingTop={'20px'}
                paddingBottom={'5px'}>circle</Heading>

            <UnorderedList
                ml={'35px'}
                gap={'30px'}
                width={'235px'}
                display={'flex'}
                fontSize={'20px'}
                color={'#FFFFFF'}
                marginTop={'15px'}
                listStyleType={'none'}  
                flexDirection={'column'}>

                <ListItem
                    gap={'5px'}
                    alignItems={'center'}
                    textDecoration={'none'}
                    color={'nav.text'} display={'flex'}>
                    <FaHome style={{ marginRight: '10px' }} />
                    <ButtonLink color={'nav.text'} to={"/"}>Home</ButtonLink>
                </ListItem>

                <ListItem
                    gap={'5px'}
                    color={'nav.text'}
                    display={'flex'}
                    alignItems={'center'}
                    textDecoration={'none'}>
                    <RiUserSearchLine style={{ marginRight: '10px' }} />
                    <ButtonLink color={'nav.text'} to={"/search"}>Search</ButtonLink>
                </ListItem>

                <ListItem
                    gap={'5px'}
                    color={'nav.text'}
                    display={'flex'}
                    alignItems={'center'}
                    textDecoration={'none'}>
                    <IoHeartOutline style={{ marginRight: '10px' }} />
                    <ButtonLink color={'nav.text'} to={"/follow"}>Follows</ButtonLink>
                </ListItem>

                <ListItem
                    gap={'5px'}
                    color={'nav.text'}
                    display={'flex'}
                    alignItems={'center'}
                    textDecoration={'none'}>
                    <CgProfile style={{ marginRight: '10px' }} />
                    <ButtonLink color={'nav.text'} to={"/profile"}>Profile</ButtonLink>
                </ListItem>

                <ListItem
                    gap={'5px'}
                    color={'nav.text'}
                    display={'flex'}
                    alignItems={'center'}
                    textDecoration={'none'}>
                    <Button
                        width={'100%'}
                        border={'none'}
                        height={'35px'}
                        onClick={onOpen}
                        color={'nav.text'}
                        fontSize={'15px'}
                        cursor={'pointer'}
                        fontWeight={'bold'}
                        borderRadius={'20px'}
                        backgroundColor={'#04A51E'}
                        transition={'all 0.2s ease-in-out'}
                        _hover={{ backgroundColor: 'nav.button.hoverBackground', color: 'nav.button.hoverText' }}>Create Post</Button>
                </ListItem>
            </UnorderedList>

            <Text
                gap={'15px'}
                display={'flex'}
                color={'white'}
                fontSize={'20px'}
                marginTop={'220px'}
                marginLeft={'20px'}
                alignItems={'center'}
                textDecoration={'none'}>
                <TbLogout2 />
                <ButtonLink onClick={logout} color={'nav.text'} to={""}>Logout</ButtonLink>
            </Text>


            <PostModal
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef} />
        </Box>
    );
}