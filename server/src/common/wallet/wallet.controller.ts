import {Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {delayMs} from '../../util/delay-ms';


@Controller('wallet')
export class WalletController {
    @Get('wallets')
    getWallets() {
        return [{
            id: 1,
            name: 'Daily Trading',
            value: 12,
            walletProvider: {
                id: 1,
                name: 'Binance'
            }
        }];
    }

    @Post('sync-wallet/:id')
    async syncWallet(@Param('id', ParseIntPipe) id: number) {
        console.log(`Mocking the refresh for wallet with id: ${id}`);
        await delayMs(10_000);
    }
}
