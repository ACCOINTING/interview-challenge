import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WalletModule} from './common/wallet/wallet.module';

@Module({
    imports: [WalletModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
