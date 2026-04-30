import { FadeTransition, } from "@/shared/ui/FadeTransition"
import { NewsBlock, } from "@/widgets/NewsBlock"
import { Page, } from "@/widgets/Page"

const MainPage = () => {
    return (
        <Page>
            <div className="flex flex-col gap-6 p-6 items-center">
                <div className="flex max-xl:flex-col gap-6 items-stretch max-md:w-full">
                    <FadeTransition transitionKey={1} delay={100}>
                        <NewsBlock
                            type={"company"}
                            title={"Новости компании"}
                        />
                    </FadeTransition>
                    <FadeTransition transitionKey={2} delay={200}>
                        <NewsBlock
                            type={"rubric"}
                            title={"Бизнес"}
                        />
                    </FadeTransition>
                </div>

                <FadeTransition transitionKey={3} delay={300}>
                    <NewsBlock
                        type={"important"}
                        title={"Важные новости"}
                    />
                </FadeTransition>
            </div>
        </Page>
    )
}
export default MainPage 