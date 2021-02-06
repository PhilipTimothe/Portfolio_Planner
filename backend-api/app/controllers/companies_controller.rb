class CompaniesController < ApplicationController

    def index
        @companies = Company.all
        # @companies =  if params[:user_id]
        #     Company.where(user_id: params[:user_id])
        # end
        render json: @companies, except: [:created_at, :updated_at]
    end

    def create 
        @company = Company.create(company_params)
        @company.save
        render json: @company, except: [:created_at, :updated_at]
    end

    def destroy
        @company = Company.find(params[:id])
        if @company.present?
            @company.destroy
        end
    end


    private 
    
    def company_params
        params.require(:company).permit(:id, :Name, :Symbol, :Industry, :Country) 
    end

end
