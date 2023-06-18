// import styled from "@emotion/styled"
import { Button, styled } from "@mui/material"

export const OrangeButton = styled(Button)(({theme}) => ({
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        padding: "11px 22px",
        borderRadius: "40px",
        width: "178px",
        textTransform: "inherit",
        height: "64px",
    }))
export const BlueButton = styled(Button)(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: "11px 22px",
        borderRadius: "40px",
        width: "178px",
        height: "64px",
        textTransform: "inherit",
        
    }))

