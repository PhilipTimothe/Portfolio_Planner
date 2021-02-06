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


    private 
    
    def company_params
        params.require(:company).permit(:Name, :Symbol, :Industry, :Country) 
    end

end
