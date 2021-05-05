import {Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {delayMs} from '../../util/delay-ms';


@Controller('wallet')
export class WalletController {
    @Get('wallets')
    getWallets() {
        return [{
            id: 1,
            name: 'Daily Trading',
            walletAddress: 'address.argent.xyz',
            totalValue: 999.99,
            balance: {
                BTC: { quantity: 0.009, value: 500 },
                ETH: { quantity: 0.15, value: 500 },
            },
            walletProvider: {
                id: 1,
                name: 'Argent'
            },
            lastUpdated: Date.now(),
        }];
    }

    @Post('sync-wallet/:id')
    async syncWallet(@Param('id', ParseIntPipe) id: number) {
        console.log(`Mocking the refresh for wallet with id: ${id}`);
        const delayS = Math.floor(Math.random() * 5) + 5;
        await delayMs(delayS * 1000);
        return 200;
    }
}
