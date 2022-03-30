import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {useTranslation} from "react-i18next";
import { ReactComponent as MetaMaskSvg } from '../../img/metamask.svg';
import {
    addMetaMaskAccountsChangedObserver,
    connectMetaMask,
    isMetaMaskConnected,
    loadMetaMaskContract
} from "../../Contract";
import LoadingButton from '@mui/lab/LoadingButton';
import {useEffect} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function WalletDialog(props) {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    const [metamaskLoading, setMetamaskLoading] = React.useState(false);
    const [ethAddress, setEthAddress] = React.useState();
    const [loadingCheck, setLoadingCheck] = React.useState(true);

    useEffect(() => {
        const checkMetaMaskConnection = async () => {
            const ethAddresses = await isMetaMaskConnected();
            if (ethAddresses.length > 0) setEthAddress(ethAddresses[0]);
            setLoadingCheck(false);

            await addMetaMaskAccountsChangedObserver(() => {
                window.location.reload(false);
            });
        };
        checkMetaMaskConnection();
    }, []);


    const handleClickOpen = () => {
        if (ethAddress) {
            setEthAddress(undefined);
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
        props.onClose(false);
    };

    const handleMetaMask = async () => {
        setMetamaskLoading(true);
        const response = await connectMetaMask();
        if (response.length > 0) {
            setEthAddress(response[0]);
            setOpen(false);
        } else {
            setMetamaskLoading(false);
        }
    };

    const ethAddressLabel = ethAddress ? ethAddress.substring(0, 5) + '...' + ethAddress.substring(38) : '';

    return (
        <div>
            {!loadingCheck &&
                (<Button endIcon={<AccountBalanceWalletIcon />} variant="contained" color={(!ethAddress && 'success') || (ethAddress && 'error')} onClick={handleClickOpen}>
                    {!ethAddress && t('wallet.connect')}
                    {ethAddress && t('wallet.disconnect') + ' ' + ethAddressLabel}
                </Button>)
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{t('wallet.choose')}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <LoadingButton
                        fullWidth
                        loading={metamaskLoading}
                        loadingPosition="end"
                        variant='contained'
                        color='info'
                        startIcon={<MetaMaskSvg />}
                        onClick={handleMetaMask}>
                        {t('wallet.metamask')}
                    </LoadingButton>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('wallet.cancelButton')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
